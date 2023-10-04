"use client";

import styled from "styled-components";
import { Rectangle1 } from "./rectangle-1";
import Image from "next/image";
import { TestemonialsCard } from "./testemonials-card";
import { Element } from "react-scroll";

const Containercomment = styled.div`
  width: 100%;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 713px;
  background-color: var(--topo-tabela-light);

  h1 {
    color: #5e5873;
    text-align: center;

    font-size: 49px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  p {
    color: #5e5873;
    text-align: center;

    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 31.9px;
  }

  div.containerCard {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 29px;
    margin-top: 131px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 29px;
  }
`;

export const Testemonials = () => {
  const depoimentos = [
    {
      src: "/assets/image 1.png",
      alt: "",
      texto:
        "A mpays foi a plataforma onde eu tive a maior taxa de aprovação de crédito do mercado.",
      autor: "Carlos Eduardo Amaral",
      cargo: "CEO da Amaral Mídia",
    },
    {
      src: "/assets/image 2.png",
      alt: "",
      texto:
        "O principal diferencial é a taxa de cartão recusado ser muito baixa, aumentando nossa taxa de conversão e o faturamento.”",
      autor: "Renato Laureano",
      cargo: "Fundador da Anellimn Store",
    },
    {
      src: "/assets/image 3.png",
      alt: "",
      texto:
        "Depois de muito pesquisar, decidi migrar para a mpays e já nas primeiras semanas nossa taxa de conversão subiu para 94%.",
      autor: "Armando Girão",
      cargo: "Fundador da Orion E-commerce",
    },
  ];

  return (
    <Containercomment>
      <Element name="depoimentos">
        <Comment>
          <h1> Depoimentos </h1>
          <p>O suporte ao cliente é nossa prioridade</p>
          <div className="containerCard">
            {depoimentos.map((depoimento, index) => (
              <TestemonialsCard key={index} {...depoimento} />
            ))}
          </div>
        </Comment>
      </Element>
    </Containercomment>
  );
};
