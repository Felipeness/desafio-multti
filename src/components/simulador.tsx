"use client";

import styled from "styled-components";
import React, { useState } from "react";
import { Montserrat } from "next/font/google";

const SimulatorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const SimulatorSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 664px;
  height: 309px;
`;

const SimulationForm = styled.form`
  display: flex;
  flex: 2;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
  width: 70%;
  height: 40%;
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

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const ResultField = styled.div`
  margin-bottom: 10px;
`;

function Simulador() {
  const [valor, setValor] = useState("");
  const [formaPagamento, setFormaPagamento] = useState("debito");

  // Aqui, você pode adicionar lógica para calcular os valores de simulação com base no valor e forma de pagamento

  return (
    <SimulatorContainer>
      <InfoContainer>
        <h2>Simulador de vendas mpays</h2>
        <p>
          Veja quanto você recebe nas vendas no crédito, débito e parcelado.
        </p>
      </InfoContainer>
      <SimulatorSection>
        <SimulationForm>
          <Form>
            <FormField>
              <StyledLabel htmlFor="valor">Valor</StyledLabel>
              <StyledInput
                type="text"
                id="valor"
                name="valor"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                placeholder="R$ 0,00"
              />
            </FormField>

            <FormField>
              <StyledLabel htmlFor="formaPagamento">
                Forma de pagamento
              </StyledLabel>
              <StyledSelect
                id="formaPagamento"
                name="formaPagamento"
                value={formaPagamento}
                onChange={(e) => setFormaPagamento(e.target.value)}>
                <option value="debito">Débito</option>
                <option value="credito">Crédito</option>
                <option value="parcelado">Parcelado</option>
              </StyledSelect>
            </FormField>
          </Form>
          <ResultContainer>
            <h3>VOCÊ RECEBE:</h3>
            <ResultField>NA HORA Não disponível</ResultField>
            <ResultField>EM 10 DIAS R$ 949,70</ResultField>
            <ResultField>EM 30 DIAS R$ 959,70</ResultField>
            <p>
              Todas as simulações usam as taxas iniciais informadas no site.
            </p>
          </ResultContainer>
        </SimulationForm>
      </SimulatorSection>
    </SimulatorContainer>
  );
}

export default Simulador;
