import React, { useState } from "react";
import styled from "styled-components";
import {
  HomeOutlined,
  PlusCircleOutlined,
  SearchOutlined,
  ShoppingOutlined,
  CameraOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  max-width: 470px;
  min-width: 470px;
  height: 50px;
  display: flex;
  padding: 10px;
  justify-content: space-evenly;
  background-color: #ffffff;
  align-items: center;
  border: 1px solid rgba(219, 219, 219, 219);
  margin-bottom: 10px;
  position: sticky;
  bottom: 0px;
`;

const Footer = ({ open, setOpen }) => {
  const navigate = useNavigate();

  const post = () => {
    navigate("/post");
  };

  const handlePost = () => {
    setOpen(true);
  };

  return (
    <>
      <Container>
        <HomeOutlined style={{ fontSize: "25px" }} />
        <SearchOutlined style={{ fontSize: "25px" }} />
        <PlusCircleOutlined
          style={{ fontSize: "35px", cursor: "pointer" }}
          onClick={handlePost}
        />
        <ShoppingOutlined style={{ fontSize: "25px" }} />
        <CameraOutlined style={{ fontSize: "25px" }} />
      </Container>
    </>
  );
};

export default Footer;
