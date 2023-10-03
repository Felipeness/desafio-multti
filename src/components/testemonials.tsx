"use client"

import styled from "styled-components"
import { Rectangle1 } from "./rectangle-1"

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 713px;

  h2 {
  font-size: 49px;
  font-weight: 400;
  line-height: 60px;
  letter-spacing: 0px;
  text-align: center;
  }

  p {
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: center;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 29px;
    padding-top: 131px;
  }
`



export const Testemonials = () => {
  return (
    <Comment>
        <h2> Depoimentos</h2>
        <p>O suporte ao cliente é nossa prioridade</p>
      <div>
        <Rectangle1 />
        <Rectangle1 />
        <Rectangle1 />
      </div>
    </Comment>
  )
}
