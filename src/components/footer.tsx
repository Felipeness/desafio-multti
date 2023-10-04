"use client";

import styled from "styled-components";
import Image from "next/image";
import { Element } from "react-scroll";
import { Aceitamos } from "./aceitamos";

const FooterContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 591px;
  background-color: var(--topo-tabela-light);
`;

const FooterDiv = styled.footer`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 591px;

  gap: 60px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  width: 131px;
  height: 124px;
  top: 168px;
  left: 165px;

  h3 {
    color: #5e5873;

    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 31.9px;
  }

  p {
    color: #5e5873;

    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  width: 131px;
  height: 124px;
  top: 168px;
  left: 165px;

  h3 {
    color: #5e5873;

    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 31.9px;
  }

  p {
    color: #5e5873;

    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
`;

const Box3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  width: 131px;
  height: 124px;
  top: 168px;
  left: 165px;

  h3 {
    color: #5e5873;

    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 31.9px;
  }

  p {
    color: #5e5873;

    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
`;

const Box4 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  width: 171px;
  height: 186px;
  margin-top: 64px;
`;

export function Footer() {
  return (
    <FooterContainer>
      <Element name="contato">
        <Image src="/assets/Footer.png" alt="Footer image" fill={true} />
        <FooterDiv>
          <Box>
            <h3>Endereço</h3>
            <p>
              R. dos Andradas, 1234 Centro Histórico Porto Alegre - RS 90020-008
            </p>
          </Box>

          <Box2>
            <h3>Legal</h3>
            <p>Termos de uso</p>
            <p>Política de privacidade</p>
          </Box2>

          <Box3>
            <h3>Contato</h3>
            <p>contato@mpays.com</p>
            <p>(51) 98314.3325</p>
            <p>Icon</p>
          </Box3>

          <Box4>
            <Aceitamos />
          </Box4>
        </FooterDiv>
      </Element>
    </FooterContainer>
  );
}
