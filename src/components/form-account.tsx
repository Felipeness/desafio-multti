"use client";

import styled from "styled-components";
import React, { useState } from "react";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 503px;
`;

const FormSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;

  width: 1108px;
  height: 383px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-right: 125px;

  h2 {
    width: 455px;

    color: var(--Cinza-Escuro---Mpays, #5e5873);

    font-size: 49px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  p {
    width: 540px;
    height: 29px;

    color: var(--Cinza-Escuro---Mpays, #5e5873);

    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 31.9px;
  }
`;

const StyledForm = styled.form`
  width: 443px;
  height: 383px;

  border: none;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;

  color: var(--Cinza-Textos-Light--Mpay, #6f6f6f);

  padding: 5px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */

  margin-bottom: 20px;

  [type] {
    padding: 8px 52px 8px 16px;
  }

  [type="email"] {
    padding: 8px 52px 8px 16px;
  }

  [type="tel"] {
    padding: 8px 52px 8px 16px;
  }

  [type="password"] {
    padding: 8px 52px 8px 16px;
  }

  ::placeholder {
    color: var(--Cinza---Input-de-Forms---Mpay, #b9b9c3);

    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StyledButton = styled.button`
  display: flex;
  width: 141px;
  height: 38px;
  justify-content: center;
  align-items: center;

  background-color: #7d45dc;
  color: var(--white-mpays);
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function FormAccount() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    senha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Dados do Formulário:", formData);
    // Processar os dados do formulário
  };

  return (
    <FormContainer>
      <FormSection>
        <InfoContainer>
          <h2>Crie sua conta</h2>
          <p>Preencha o formulário ao lado para cadastrar-se no mpays.</p>
        </InfoContainer>

        <StyledForm onSubmit={handleSubmit}>
          <FormField>
            <StyledLabel htmlFor="nome">Nome e sobrenome *</StyledLabel>
            <StyledInput
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              required
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <StyledLabel htmlFor="email">Email *</StyledLabel>
            <StyledInput
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              required
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <StyledLabel htmlFor="telefone">Telefone *</StyledLabel>
            <StyledInput
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="Telefone"
              required
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <StyledLabel htmlFor="senha">Senha *</StyledLabel>
            <StyledInput
              type="password"
              id="senha"
              name="senha"
              placeholder="⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉"
              required
              onChange={handleChange}
            />
          </FormField>
          <StyledButton type="submit">Cadastrar</StyledButton>
        </StyledForm>
      </FormSection>
    </FormContainer>
  );
}

export default FormAccount;
