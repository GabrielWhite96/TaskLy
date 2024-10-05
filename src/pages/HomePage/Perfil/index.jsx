import React from "react";
import { PerfilContainer } from "./index.styles";

export default function PerfilIcon({image, onClick}) {
  return <PerfilContainer style={{ backgroundImage: `url(${image})` }} onClick={onClick} />;
}
