import React, { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import {
  HeaderContainer,
  Logo,
  NavLinks,
  NavButton,
  NavButtonRegister,
  MenuButton,
  MobileMenu,
} from "./Header.styles";
import { FaBars } from "react-icons/fa";
import LogoImgB from "../../assets/Logo_Full_B_64x.png";
import LogoImgW from "../../assets/Logo_Full_W_64x.png";

export default function Header() {
  const { title } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const logoSrc = title === "light" ? LogoImgB : LogoImgW;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer>
      <Logo src={logoSrc} alt="Logo" />

      <NavLinks>
        <NavButton>Recursos</NavButton>
        <NavButton>Apps</NavButton>
        <NavButton>Premium</NavButton>
        <NavButton>Central de Ajuda</NavButton>
        <NavButton>Entrar</NavButton>
        <NavButtonRegister>Registrar</NavButtonRegister>
      </NavLinks>

      <MenuButton onClick={toggleMenu}>
        <FaBars /> 
      </MenuButton>

      <MobileMenu isOpen={menuOpen}>
        <NavButton>Recursos</NavButton>
        <NavButton>Apps</NavButton>
        <NavButton>Premium</NavButton>
        <NavButton>Central de Ajuda</NavButton>
        <NavButton>Entrar</NavButton>
        <NavButtonRegister>Registrar</NavButtonRegister>
      </MobileMenu>
    </HeaderContainer>
  );
}
