"use client";

import styled from "styled-components";
import { Montserrat } from "next/font/google";

const ContainerSimulador = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const Form = styled.div``;

const SimuladorSection = styled.section``;

export const Simulador = () => {
  return (
    <ContainerSimulador>
      <SimuladorSection>
        <div>
          <h1>Simulador de vendas mpays</h1>
          <p>
            Veja quanto você recebe nas vendas no crédito, débito e parcelado.
          </p>
        </div>
        <Form>
          <form action=""></form>
          <form action=""></form>
        </Form>
      </SimuladorSection>
    </ContainerSimulador>
  );
};
