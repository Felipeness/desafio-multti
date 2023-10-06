"use client";

import styled from "styled-components";
import React, { useState } from "react";

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const StyledForm = styled.form`
  flex: 2;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormField = styled.div`
  margin-bottom: 20px;
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
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
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
            required
            onChange={handleChange}
          />
        </FormField>

        <StyledButton type="submit">Cadastrar</StyledButton>
      </StyledForm>
    </FormContainer>
  );
}

export default FormAccount;
