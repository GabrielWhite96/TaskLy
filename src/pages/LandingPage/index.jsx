import React from "react";

import Header from "../../components/Header";
import SloganSectionLP from "../../components/SloganSectionLP";
import TaskSectionLP from "../../components/TaskSectionLP";
import NotificationSectionLP from "../../components/NotificationSectionLP";
import EisenhowerSectionLP from "../../components/EisenhowerMatrixSectionLP";
import PlataformsSectionLP from "../../components/PlataformsSectionLP";
import Footer from "../../components/Footer";

export default function LandingPage() {

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
