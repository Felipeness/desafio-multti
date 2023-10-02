"use client"

import styled from "styled-components"
import { LaptopImg } from "./laptop"

const Hero = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  left: 167px;
  padding-top: 200px;

  color: var(--bg-primary);

  h1 {
    font-size: 48px;
    font-weight: 500;
    line-height: 56px;
    letter-spacing: 0.15px;
    text-align: left;
    color: var(--bg-primary);

    width: 455.32px;
    height: 180px;
    top: 266px;
    left: 165.12px;

    font-family: Montserrat;
    font-size: 49px;
    font-weight: 400;
    line-height: 60px;
    letter-spacing: 0px;
    text-align: left;

    p {
      font-family: Montserrat;
      font-size: 49px;
      font-weight: 700;
      line-height: 60px;
      letter-spacing: 0px;
      text-align: left;
    }

  }

  p {
    width: 437.3px;
    height: 86px;
    top: 468px;
    left: 165.12px;

    font-family: Montserrat;
    font-size: 18px;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0px;
    text-align: left;


  }
`

export function HeroSection() {
  return (
    <Hero>
      <div>
        <h1>
          Tecnologia e segurança pra você <p>vender mais.</p>
        </h1>
          <p>Venda online com a segurança e tecnologia mpays. Soluções simples e flexíveis para digitalizar o seu negócio.</p>
      </div>
      <LaptopImg />
    </Hero>
  )
}
