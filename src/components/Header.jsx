import React from "react";
import styled from "styled-components";
import logo from "../asset/pngegg.png";
import profile from "../asset/gsw.svg";
import {
  HomeOutlined,
  PlusCircleOutlined,
  HeartOutlined,
  MessageOutlined,
} from "@ant-design/icons";

const Container = styled.div`
  width: 100%;
  max-width: 470px;
  min-width: 470px;
  height: 60px;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  background-color: #ffffff;
  align-items: center;
  border: 1px solid rgba(219, 219, 219, 219);
  margin-bottom: 10px;
  position: sticky;
  top: 0px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 470px;
  height: auto;
  display: flex;
  justify-content: space-between;
  img {
    width: 100px;
    object-fit: cover;
  }
  .user-container {
    width: 170px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      object-fit: cover;
    }
    p {
      text-align: center;
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="logo" />
        <div className="user-container">
          <HomeOutlined style={{ fontSize: "20px" }} />
          <MessageOutlined style={{ fontSize: "20px" }} />

          <HeartOutlined style={{ fontSize: "20px" }} />
          <img src={profile} alt="" />
        </div>
      </Wrapper>
    </Container>
  );
};

export default Header;
