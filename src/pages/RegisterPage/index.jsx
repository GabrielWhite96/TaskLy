import React, { useState } from "react";
import axios from "axios";
import { server, showError } from "../../common";
import LogoImg from "../../assets/Logo_64x64.png";
import {
  RegisterContainer,
  RegisterBox,
  RegisterTitle,
  InputGroup,
  Input,
  RegisterButton,
  RegisterFooter,
  FooterLink,
  LogoAndTitle,
  ImgLogo,
} from "./index.styles";

import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    if (password !== confirmPassword) {
      console.error("As senhas não coincidem");
      alert("Senhas não coincidem!!!");
      return;
    }

    try {
      const response = await axios.post(`${server}/signup`, {
        name,
        email,
        password,
        confirmPassword,
      });
      console.log(response);

      if (response.data) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `bearer ${response.data.token}`;
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      }
    } catch (error) {
      console.error("Erro ao registrar:", error);
    }
    navigate("/Login");
  };

  const handleLogin = async (e) => {
    navigate("/Login");
  };

  return (
    <RegisterContainer>
      <RegisterBox>
        <LogoAndTitle>
          <ImgLogo src={LogoImg}></ImgLogo>
          <RegisterTitle>TaskLy</RegisterTitle>
        </LogoAndTitle>
        <form onSubmit={handleRegister}>
          <InputGroup>
            <Input
              type="text"
              placeholder="Nome de usuário"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="text"
              placeholder="E-mail"
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
          <InputGroup>
            <Input
              type="password"
              placeholder="Confirmar Senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </InputGroup>
          <RegisterButton type="submit">Registrar</RegisterButton>
        </form>
        <RegisterFooter>
          <FooterLink onClick={handleLogin}>
            Já tem uma conta? Faça login
          </FooterLink>
        </RegisterFooter>
      </RegisterBox>
    </RegisterContainer>
  );
}
