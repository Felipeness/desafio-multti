"use client";

import styled from "styled-components";
import React, { useState } from "react";

const SimulatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  background-color: var(--topo-tabela-light);

  h2 {
    width: 380px;

    color: var(--Cinza-Escuro---Mpays, #5e5873);

    font-size: 49px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 27px;
  }

  p {
    width: 350px;
    height: 53px;

    color: var(--Cinza-Escuro---Mpays, #5e5873);

    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 31.9px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 120px;
  padding-right: 65px;
`;

const SimulatorSection = styled.div`
  display: flex;
  width: 664px;
  height: 309px;
`;

const SimulationForm = styled.form`
  display: flex;
  padding: 20px;
  gap: 31px;
  border: 1px solid #ccc;
  border-radius: 16px;

  width: 100%;

  background: var(--Fundo-Light---Mpays, #f8f8f8);
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
  width: 60%;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
  gap: 2px;
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
  width: 40%;
  gap: 24px;

  color: var(--Cinza-Escuro---Mpays, #5e5873);

  h3 {
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: left;
  }

  p {
    width: 217px;
    height: 33px;
    flex-shrink: 0;

    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
`;

const ResultField = styled.div`
  margin-bottom: 10px;

  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
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
            <ResultField>NA HORA: Não disponível</ResultField>
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
