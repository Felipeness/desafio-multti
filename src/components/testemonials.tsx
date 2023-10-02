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

  height: 583px;


  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 29px;
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
