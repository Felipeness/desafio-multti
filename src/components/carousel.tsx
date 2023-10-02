"use client"

import styled from "styled-components"



const Carrosel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  background-color: var(--bg-primary);
  color: var(--bg-secondary);


`

export function Carousel() {
  return (
    <Carrosel>
      Carousel
    </Carrosel>
  )
}
