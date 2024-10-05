import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import SloganSection from '../../components/SloganSection';
import TaskSectionLP from '../../components/TaskSectionLP';
import NotificationSectionLP from '../../components/NotificationSectionLP';

export default function LandingPage() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <>
      <Header/>
      <SloganSection/>
      <TaskSectionLP/>
      <NotificationSectionLP/>
    </>
  );
}
