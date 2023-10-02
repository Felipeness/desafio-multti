"use client"

import styled from "styled-components"
import { Montserrat } from 'next/font/google'
import { Navbar } from "./nav-bar"

const montserrat = Montserrat({
  weight: ['400'],
  subsets: ['latin']
})


interface HeaderProps {

}

const TagHeader = styled.header`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100px;
  background-color: black;
`


export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <Navbar/>
    </TagHeader>
  )
}
