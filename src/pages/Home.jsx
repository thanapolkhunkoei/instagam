import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Stories from "../components/Stories";

const Container = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  justify-content: center;
  background-color: #fafafa;
  align-items: center;
  min-width: 470px;
`;

const Home = () => {
  const [open, setOpen] = useState(false);
  const storiesUrl =
    "https://run.mocky.io/v3/f48649bf-2bfd-48db-9a64-5c8ad0646186";

  const [story, setStory] = useState([]);

  const getStories = async () => {
    await axios.get(storiesUrl).then((res) => {
      setStory(res.data.story);
    });
  };

  return (
    <Container>
      <Header />
      <Stories story={story} setStory={setStory} getStories={getStories} />
      <Content open={open} setOpen={setOpen} />
      <Footer open={open} setOpen={setOpen} />
    </Container>
  );
};

export default Home;
