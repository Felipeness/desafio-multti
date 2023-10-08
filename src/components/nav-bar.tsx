"use client";

import styled from "styled-components";
import { Logoicon } from "./logo-icon";
import { MouseEvent } from "react";
import { Link } from "react-scroll";

const Nav = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  width: 1275px;

  svg {
    width: 171.55px;
    height: 38.15px;
    position: relative;

    cursor: pointer;
  }
`;
const Navselect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

export function Navbar() {
  return (
    <Nav>
      <Logoicon />
      <Navselect>
        <li>
          <Link to="soluções" smooth={true} duration={500}>
            <p>Soluções</p>
          </Link>
        </li>
        <li>
          <Link to="tarifas" smooth={true} duration={500}>
            <p>Tarifas</p>
          </Link>
        </li>
        <li>
          <Link to="depoimentos" smooth={true} duration={500}>
            <p>Depoimentos</p>
          </Link>
        </li>
        <li>
          <Link to="contato" smooth={true} duration={500}>
            <p>Contato</p>
          </Link>
        </li>
        <li>
          <Link to="cadastro" smooth={true} duration={500}>
            <p>Cadastro</p>
          </Link>
        </li>
        <li>
          <button>Entrar</button>
        </li>
      </Navselect>
    </Nav>
  );
}
