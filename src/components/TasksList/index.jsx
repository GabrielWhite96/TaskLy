import React, { useState, useEffect } from "react";
import Task from "../Task";

import axios from "axios";
import { server, showError } from "../../common";
import invertDateFormat from "../../utils/auxFunction";

import {
  ListContainer,
  TitleList,
  AddButton,
  TaskInput,
  DateInput,
  TimeInput,
  AddTaskContainer,
  TitleInput,
} from "./index.styles";

export default function TaskList() {
  const [taskList, setTaskList] = useState([]);
  const [taskDesc, setTaskDesc] = useState("");
  const [taskTitle, setTaskTitle] = useState(""); // Novo estado para o título
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState(""); // Estado para armazenar a hora

  // Função para buscar tarefas com o token
  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem("token"); // Pega o token do localStorage
      if (!token) {
        console.error("Nenhum token encontrado. Usuário não autenticado.");
        return;
      }

      try {
        const response = await axios.get(`${server}/tasks`, {
          headers: { Authorization: `Bearer ${token}` }, // Inclui o token no cabeçalho
        });
        if (response.data) {
          setTaskList(response.data);
        }
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      }
    };
    fetchTasks();
  }, []);

  const handleFinish = async (taskId) => {
    const token = localStorage.getItem("token");
    if (!token) return; // Garante que o token está presente

    try {
      await axios.delete(`${server}/tasks/${taskId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const updatedTasks = await axios.get(`${server}/tasks`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTaskList(updatedTasks.data);
    } catch (error) {
      console.error("Erro ao concluir tarefa:", error);
    }
  };

  // Função para adicionar uma nova tarefa
  const handleAddTask = async () => {
    if (!taskDate || !taskTitle.trim()) return; // Verifica se todos os campos foram fornecidos

    const formattedDate = invertDateFormat(taskDate);

    const newTaskObject = {
      title: taskTitle,
      description: taskDesc,
      toDoDate: formattedDate,
    };

    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      await axios.post(`${server}/tasks`, newTaskObject, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const updatedTasks = await axios.get(`${server}/tasks`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTaskList(updatedTasks.data);
      setTaskDesc(""); // Limpa o input
      setTaskTitle(""); // Limpa o campo de título
      setTaskDate("");
      setTaskTime("");
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
    }
  };

  return (
    <div>
      <TitleList>Lista de Tarefas</TitleList>
      <AddTaskContainer>
        <TitleInput
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Digite o título da tarefa"
        />
        <TaskInput
          type="text"
          value={taskDesc}
          onChange={(e) => setTaskDesc(e.target.value)}
          placeholder="Digite a descrição da tarefa"
        />
        <DateInput
          type="date"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)} // Atualiza o estado de data
        />
        <TimeInput
          type="time" // Input para a hora no formato xx:xx
          value={taskTime}
          onChange={(e) => setTaskTime(e.target.value)} // Atualiza o estado de hora
        />
        <AddButton onClick={handleAddTask}>Adicionar Tarefa</AddButton>
      </AddTaskContainer>
      <ListContainer>
        {taskList.length === 0 ? (
          <p style={{ color: "#fff" }}>Nenhuma tarefa disponível.</p>
        ) : (
          taskList.map((task) => (
            <Task
              key={task.id}
              task={task}
              onFinish={() => handleFinish(task.id)}
            />
          ))
        )}
      </ListContainer>
    </div>
  );
}
