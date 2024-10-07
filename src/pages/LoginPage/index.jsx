import React, { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import axios from "axios";
import { server, showError } from "../../common";
import {
  LoginContainer,
  LoginBox,
  InputGroup,
  Input,
  LoginButton,
  LoginFooter,
  FooterLink,
  ImgLogo,
  LogoAndTitle,
} from "./index.styles";
import LogoImgB from "../../assets/Logo_Full_B_64x.png";
import LogoImgW from "../../assets/Logo_Full_W_64x.png";

import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { title } = useContext(ThemeContext);

  const logoSrc = title === "light" ? LogoImgB : LogoImgW;

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${server}/signin`, {
        email,
        password,
      });

      if (response.data) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `bearer ${response.data.token}`;
        localStorage.setItem("token", response.data.token);
        const token = localStorage.getItem("token");
        if (token) {
          navigate("/home");
        }
      } else {
        showError("Falha ao autenticar");
      }
    } catch (error) {
      alert("Usuário não encontrado!!!");
      console.error("Erro ao fazer login:", error);
    }
  };

  const handleRegister = async (e) => {
    navigate("/Register");
  };

  const handleLandingPage = async (e) => {
    navigate("/LandingPage");
  };

  const handleForgetPassword = async (e) => {
    alert("Ainda em Construção!!!");
  };

  return (
    <LoginContainer>
      <LoginBox>
        <LogoAndTitle>
          <ImgLogo onClick={handleLandingPage} src={logoSrc}></ImgLogo>
        </LogoAndTitle>
        <form onSubmit={handleLogin}>
          <InputGroup>
            <Input
              type="text"
              placeholder="Nome de usuário ou E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
          <LoginButton type="submit">Entrar</LoginButton>
        </form>
        <LoginFooter>
          <FooterLink onClick={handleForgetPassword}>
            Esqueceu sua senha?
          </FooterLink>
          <FooterLink onClick={handleRegister}>Criar uma conta</FooterLink>
        </LoginFooter>
      </LoginBox>
    </LoginContainer>
  );
}
