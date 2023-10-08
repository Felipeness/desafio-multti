"use client";

import styled from "styled-components";
import { Montserrat } from "next/font/google";
import { Navbar } from "./nav-bar";

interface HeaderProps {}

const TagHeader = styled.header`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100px;
  z-index: 5;
`;

export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <Navbar />
    </TagHeader>
  );
}
