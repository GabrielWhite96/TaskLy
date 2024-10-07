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
} from "./TasksList.styles";

export default function TasksList() {
  const [taskList, setTaskList] = useState([]);
  const [taskDesc, setTaskDesc] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");
  // Função para buscar tarefas com o token
  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Nenhum token encontrado. Usuário não autenticado.");
        return;
      }

      try {
        const response = await axios.get(`${server}/tasks`, {
          headers: { Authorization: `Bearer ${token}` },
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
    if (!token) return;
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
    if (!taskDate || !taskTitle.trim()) return;

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
      setTaskDesc("");
      setTaskTitle("");
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
          onChange={(e) => setTaskDate(e.target.value)}
        />
        <TimeInput
          type="time"
          value={taskTime}
          onChange={(e) => setTaskTime(e.target.value)}
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
