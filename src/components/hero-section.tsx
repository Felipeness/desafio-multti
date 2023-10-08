"use client";

import styled from "styled-components";
import { LaptopImg } from "./laptop";
import { Element } from "react-scroll";

const HeroContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 1000px;

  color: var(--bg-primary);
`;

const HeroSelect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Hero = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 100%;

  svg {
    margin: -100px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 48px;
    font-weight: 400;
    line-height: 56px;
    letter-spacing: 0.15px;
    text-align: left;
    color: var(--bg-primary);

    width: 455.32px;
    height: 180px;

    p {
      font-size: 49px;
      font-weight: 700;
      line-height: 60px;
      letter-spacing: 0px;
      text-align: left;
    }
  }

  h2 {
    width: 437.3px;
    height: 86px;
    margin-top: 48px;

    font-size: 18px;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

export function HeroSection() {
  return (
    <Element name="soluções">
      <HeroContainer>
        <HeroSelect>
          <Hero>
            <div>
              <h1>
                Tecnologia e segurança pra você <p>vender mais.</p>
              </h1>
              <h2>
                Venda online com a segurança e tecnologia mpays. Soluções
                simples e flexíveis para digitalizar o seu negócio.
              </h2>
            </div>
            <LaptopImg />
          </Hero>
        </HeroSelect>
      </HeroContainer>
    </Element>
  );
}
