"use client";

import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { ChevronDireito } from "./chevron-direito";
import { ChevronEsquerdo } from "./chevron-esquerdo";
import { Element } from "react-scroll";

const Carrosel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 1110px;
  background-color: transparent;
  padding-bottom: 120px;
  padding-top: 0;
  border-top: none;
  margin-top: -30px;

  .carousel .carousel-root {
    display: flex;
  }

  .carousel.carousel-slider {
    display: flex;
    width: 100%;
    height: 700px;
    margin-top: -35px;
  }

  .carousel .control-prev.control-arrow:before {
    display: none;
  }

  .carousel .slider-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: none;
    position: relative;
  }

  .carousel .custom-prev-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: none;
    background-color: transparent;
    position: relative;
  }
  .carousel .custom-next-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: none;
    background-color: transparent;
    position: relative;
  }
`;

export function CarroselComponent() {
  const CustomNextButton = ({ onClick }: any) => {
    return (
      <button onClick={onClick} className="custom-next-button">
        <ChevronDireito />
      </button>
    );
  };

  const CustomPrevButton = ({ onClick }: any) => {
    return (
      <button onClick={onClick} className="custom-prev-button">
        <ChevronEsquerdo />
      </button>
    );
  };

  return (
    <Element name="tarifas">
      <Carrosel>
        <Carousel
          showThumbs={false}
          showArrows={true}
          showStatus={false}
          showIndicators={false}
          dynamicHeight={true}
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <CustomNextButton onClick={onClickHandler} aria-label={label} />
            )
          }
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <CustomPrevButton onClick={onClickHandler} aria-label={label} />
            )
          }>
          <div>
            <img src="assets/Slider1.png" />
          </div>
          <div>
            <img src="assets/Slider2.png" />
          </div>
          <div>
            <img src="assets/Slider3.png" />
          </div>
          <div>
            <img src="assets/Slider4.png" />
          </div>
        </Carousel>
      </Carrosel>
    </Element>
  );
}
