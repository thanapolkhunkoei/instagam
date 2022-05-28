import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 470px;
  /* height: 100px; */
  max-width: 470;
  margin-top: 5px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: scroll;
  border: 1px solid rgba(219, 219, 219, 219);
  border-radius: 8px;
  padding: 10px;
`;

const StoryBox = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0px 5px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    padding: 1px;
    border: 1px solid red;
    cursor: pointer;
  }
  p {
    text-align: center;
    font-size: 10px;
  }
`;

const Stories = ({ getStories, story, open }) => {
  useEffect(() => {
    getStories();
  }, []);
  const navigate = useNavigate();

  const toStory = () => {
    navigate("/story");
  };

  return (
    <>
      {!open && (
        <Container>
          {story.map((item, index) => (
            <StoryBox key={index}>
              <img src={item.userCover} alt="logo" onClick={toStory} />
              <p>{item.username}</p>
            </StoryBox>
          ))}
        </Container>
      )}
    </>
  );
};

export default Stories;
