"use client"

import styled from "styled-components"
import { Logoicon } from "./logo-icon"



const Nav = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
    svg {
    position: absolute;
    width: 171.55px;
    height: 38.15px;
    top: 32.93px;
    left: 165.45px;
    }
  `
const Navselect = styled.div`
  display: flex;
  position: absolute;
  width: Hug (591px);
  height: Hug (28px);
  top: 36px;
  right: 165px;
  gap: 30px;
  color: var(--bg-primary);
  list-style: none;

`

export function Navbar() {
  return (
    <Nav>
      <Logoicon />
      <Navselect>
        <li>Soluções</li>
        <li>Tarifas</li>
        <li>Depoimentos</li>
        <li>Contato</li>
        <li>Cadastro</li>
        <li>Entrar</li>
      </Navselect>
    </Nav>
  )
}
