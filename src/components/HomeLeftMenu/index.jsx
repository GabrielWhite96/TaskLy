import React, { useState } from "react";
import { LeftMenu, ButtonLeftMenu } from "./HomeLeftMenu.styles";
import { useNavigate } from "react-router-dom";

import imgConfig from "../../assets/config.png";
import imgMatrix from "../../assets/matriz.png";
import imgPerfil from "../../assets/perfil.jpeg";
import imgTasks from "../../assets/tarefas.png";
import imgExit from "../../assets/sair.png";

import PerfilIcon from "./Perfil";
import ButtonMenu from "../../components/ButtonMenu";
import Task from "../../components/Task";
import TaskList from "../../components/TasksList";
import ConfigModal from "../../components/ConfigModal"; // Import do novo modal

export default function HomeLeftMenu() {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false); // Controle do estado do modal

  const inConstruction = () => {
    alert("Em Construção!");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen); // Função para abrir e fechar o modal
  };

  return (
    <>
      <LeftMenu>
        <PerfilIcon
          image={imgPerfil}
          style={{ marginTop: "40px" }}
          onClick={inConstruction}
        ></PerfilIcon>
        <ButtonLeftMenu>
          <ButtonMenu image={imgTasks} onClick={inConstruction} />
        </ButtonLeftMenu>
        <ButtonLeftMenu>
          <ButtonMenu image={imgMatrix} onClick={inConstruction} />
        </ButtonLeftMenu>
        <ButtonLeftMenu>
          <ButtonMenu image={imgConfig} onClick={toggleModal} />{" "}
          {/* Abrir o modal ao clicar no botão de Config */}
        </ButtonLeftMenu>
        <ButtonLeftMenu>
          <ButtonMenu image={imgExit} onClick={handleLogout} />
        </ButtonLeftMenu>
      </LeftMenu>
      {isModalOpen && <ConfigModal onClose={toggleModal} />}{" "}
      {/* Renderiza o modal se o estado estiver true */}
    </>
  );
}
