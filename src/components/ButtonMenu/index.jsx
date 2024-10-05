import React from "react";
import {
  ButtonContainer
} from "./index.styles";

export default function ButtonMenu({image, onClick}) {
  return <ButtonContainer style={{ backgroundImage: `url(${image})` }} onClick={onClick} />;
}
