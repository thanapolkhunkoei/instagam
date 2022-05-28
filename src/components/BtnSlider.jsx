import React from "react";
import rightArrow from "../asset/icons/right-arrow.svg";
import leftArrow from "../asset/icons/left-arrow.svg";
import styled from "styled-components";

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <>
      <Button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      >
        <img src={direction === "next" ? rightArrow : leftArrow} />
      </Button>
    </>
  );
};

const Button = styled.button``;

export default BtnSlider;
