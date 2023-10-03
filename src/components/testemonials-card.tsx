import styled from "styled-components";
import Image from "next/image";
import { AspasIcon } from "./aspas-icon";

const White = styled.div`
  width: 352px;
  height: 352px;
  flex-shrink: 0;
  background-color: var(--white-mpays-2);
  padding-top: 108px;
  position: relative;

  p {
    width: 256px;

    font-family: Mulish;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
  }

  p.textDepoimento {
    color: var(--Cinza-Escuro---Mpays, #5e5873);
    text-align: center;
    font-family: Mulish;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  p.autor {
    color: #5e5873;
    text-align: center;

    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 31.9px;
  }

  p.cargo {
    color: var(--Cinza-Escuro---Mpays, #5e5873);
    text-align: center;

    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
  }
`;

interface ITestemonialsCardProps {
  src: string;
  alt: string;
  texto: string;
  autor: string;
  cargo: string;
}

export const TestemonialsCard = ({
  src,
  alt,
  texto,
  autor,
  cargo,
}: ITestemonialsCardProps) => {
  return (
    <White>
      <Image
        src={src}
        alt={alt}
        width={120}
        height={120}
        style={{
          position: "absolute",
          top: "-60px",
        }}
      />
      <AspasIcon />
      <p className="textDepoimento">{texto}</p>
      <p className="autor">{autor}</p>
      <p className="cargo">{cargo}</p>
    </White>
  );
};
