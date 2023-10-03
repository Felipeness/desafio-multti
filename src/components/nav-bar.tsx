"use client"

import styled from "styled-components"
import { Logoicon } from "./logo-icon"
import Link from "next/link";

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

    cursor: pointer;

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

  li {
    cursor: pointer;
  }

  a {
    color: var(--white-mpays);
    text-decoration: none;

    &:hover {
      color: var(--color-primary);
    }
  }

  button {
    width: 105px;
    height: 28px;
    padding: 6px, 29px, 6px, 29px;
    border-radius: 5px;
    border: 1px solid;

    border-color: var(--white-mpays);
    color: var(--white-mpays);

    background: transparent;

    cursor: pointer;

    &:hover {
      background-color: var(--white-mpays);
      color: var(--color-primary);
    }

  }
`

export function Navbar() {
  return (
    <Nav>
      <Logoicon />
      <Navselect>
        <li>
          <Link href="/hero-section">
          <p>Soluções</p>
          </Link>
        </li>
        <li>
          <Link href="/Carousel">
            <p>Tarifas</p>
          </Link>
        </li>
        <li>
          <Link href="/Testemonials">
            <p>Depoimentos</p>
          </Link>
        </li>
        <li>
          <Link href="/Footer">
            <p>Contato</p>
          </Link>
        </li>
        <li>
          <Link href="/CreateAccount">
            <p>Cadastro</p>
          </Link>
        </li>
        <li>
          <Link href="/Login">
            <button>Entrar</button>
          </Link>
        </li>
      </Navselect>
    </Nav>
  )
}
