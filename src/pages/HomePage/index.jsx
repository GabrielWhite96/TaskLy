import React from "react";
import { HomeContainer, ButtonLeftMenu } from "./HomePage.styles";

import { useNavigate } from "react-router-dom";

import imgConfig from "../../assets/config.png";
import imgMatrix from "../../assets/matriz.png";
import imgPerfil from "../../assets/perfil.jpeg";
import imgTasks from "../../assets/tarefas.png";
import imgExit from "../../assets/sair.png";

import Task from "../../components/Task";
import TaskList from "../../components/TasksList";
import HomeLeftMenu from "../../components/HomeLeftMenu";
import HomeMainContainer from "../../components/HomeMainsContainer";
import HomeTaskContainer from "../../components/HomeTaskContainer";

export default function HomePage() {
  const navigate = useNavigate();

  const inConstruction = () => {
    alert("Em Construção!");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <HomeContainer>
      <HomeLeftMenu />
      <HomeMainContainer />
      <HomeTaskContainer />
      {/* <OneTaskContainer></OneTaskContainer> */}
    </HomeContainer>
  );
}
