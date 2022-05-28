import React, { useEffect, useState } from "react";
import {
  LeftOutlined,
  CaretLeftOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import axios from "axios";
import BtnSlider from "../components/BtnSlider";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Story = () => {
  const [open, setOpen] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/instagam");
  };

  const nextSlide = () => {
    if (slideIndex !== 6) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === 6) {
      setSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 0) {
      setSlideIndex(6);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };
  const storiesUrl =
    "https://run.mocky.io/v3/f48649bf-2bfd-48db-9a64-5c8ad0646186";

  const [story, setStory] = useState([]);

  const getStories = async () => {
    await axios.get(storiesUrl).then((res) => {
      setStory(res.data.story);
    });
  };

  useEffect(() => {
    getStories();
  }, []);

  return (
    <>
      <Wrap>
        <Container>
          <BackBtn>
            <LeftOutlined
              style={{ fontSize: "20px", color: "black" }}
              onClick={backToHome}
            />
          </BackBtn>
          {story.map((obj, index) => {
            return (
              <div
                key={obj.id}
                className={
                  slideIndex === index + 1 ? "slide active-anim" : "slide"
                }
              >
                <video autoPlay muted src={story[slideIndex].storyUrl} />
              </div>
            );
          })}
          <BtnSlider moveSlide={nextSlide} direction={"next"} />
          <BtnSlider moveSlide={prevSlide} direction={"prev"} />

          <div className="container-dots">
            {Array.from({ length: 7 }).map((item, index) => (
              <div
                onClick={() => moveDot(index + 1)}
                className={slideIndex === index ? "dot active" : "dot"}
              ></div>
            ))}
          </div>
        </Container>
        <Footer />
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  max-width: 470px;
  min-width: 470px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: #fafafa; */

  align-items: center;
  min-width: 470px;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  /* margin: auto; */
  position: relative;
  overflow: hidden;
  display: flex;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  .slide {
    width: 100%;
    height: 100%;
    /* position: absolute; */
    /* opacity: 0; */
    transition: opacity ease-in-out 0.4s;
  }
  .slide img {
    width: 100%;
    max-height: 100vh;
    object-fit: cover;
  }
  .active-anim {
    opacity: 1;
  }

  .btn-slide {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #f1f1f1;
    border: 1px solid rgba(34, 34, 34, 0.287);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .btn-slide img {
    width: 15px;
    height: 15px;
    pointer-events: none;
  }
  .prev {
    top: 50%;
    left: 20px;
    transform: translateY(-60%);
  }
  .next {
    top: 50%;
    right: 20px;
    transform: translateY(-60%);
  }

  .container-dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 1px solid #f1f1f1;
      margin: 0 5px;
      background: #f1f1f1;
    }
    .dot.active {
      background: rgb(32, 32, 32);
    }
  }
`;

const BackBtn = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 50%;
  padding: 4px;
  top: 10px;
  left: 20px;
  cursor: pointer;
  z-index: 99;
`;

export default Story;
