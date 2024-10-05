import React, { useState } from "react";
import axios from "axios";
import { server, showError } from "../../common";
import LogoImg from "../../assets/Logo_64x64.png";
import {
  LoginContainer,
  LoginBox,
  LoginTitle,
  InputGroup,
  Input,
  LoginButton,
  LoginFooter,
  FooterLink,
  ImgLogo,
  LogoAndTitle,
} from "./index.styles";

import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

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

  const handleForgetPassword = async (e) => {
    alert("Ainda em Construção!!!");
  };

  return (
    <LoginContainer>
      <LoginBox>
        <LogoAndTitle>
          <ImgLogo src={LogoImg}></ImgLogo>
          <LoginTitle>TaskLy</LoginTitle>
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
