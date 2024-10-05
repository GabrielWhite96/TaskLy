import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import SloganSectionLP from "../../components/SloganSectionLP";
import TaskSectionLP from "../../components/TaskSectionLP";
import NotificationSectionLP from "../../components/NotificationSectionLP";
import EisenhowerSectionLP from "../../components/EisenhowerMatrixSectionLP";
import PlataformsSectionLP from "../../components/PlataformsSectionLP";
import Footer from "../../components/Footer";

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
      <Header />
      <SloganSectionLP />
      <EisenhowerSectionLP />
      <TaskSectionLP />
      <NotificationSectionLP />
      <PlataformsSectionLP />
      <Footer />
    </>
  );
}
