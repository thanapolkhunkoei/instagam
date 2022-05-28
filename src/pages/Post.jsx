import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.div`
  width: 470px;
  height: 70vh;
  max-width: 470;
  margin-top: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-top: 15px;
  overflow: scroll;
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  /* justify-content: center; */
  /* background-color: #fafafa; */
  /* align-items: center; */
  max-width: 470px;
  min-width: 470px;

  .file-upload {
    max-width: 470px;
    height: 100%;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }

  .file-upload-input {
    position: absolute;
    top: 10px;
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 440px;
    height: 100%;
    outline: none;
    opacity: 0;
    text-align: center;
    cursor: pointer;
  }

  .image-upload-wrap {
    width: 400px;
    margin-top: 20px;
    border: 3px dashed #6d6d6d;
    position: relative;
  }

  .text-upload-input {
    width: 400px;
    height: 150px;
    text-align: center;
  }

  .post-text {
    /* width: 200px; */
    text-align: center;
  }

  .post-text h3 {
    font-weight: bold;
    text-transform: uppercase;
    padding: 60px 0;
  }

  .post-image {
    width: 400px;
    margin: 0;
    color: #fff;
    background: #000000;
    border: none;
    padding: 10px;
    border-radius: 4px;
    border-bottom: 1px solid #1c1c1c;
    transition: all 0.2s ease;
    outline: none;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 5px;
    cursor: pointer;
  }

  .post-image:hover {
    background: #ffffff;
    color: #000000;
    border: 4px solid #2d2d2d;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  .post-image:active {
    border: 0;
    transition: all 0.2s ease;
  }
  .btn-box {
    button .back {
    }
  }
`;

const Post = ({
  handlePost,
  handleImg,
  caption,
  setCaption,
  setOpen,
  open,
}) => {
  const navigate = useNavigate();

  const back = () => {
    navigate("/");
  };

  return (
    <Container>
      <Wrapper>
        <div className="file-upload">
          <div className="image-upload-wrap">
            <input
              className="file-upload-input"
              type="file"
              onChange={handleImg}
              name="file"
              id="formFile"
            />
            <div className="post-text">
              <h3>Click to upload and deploy here</h3>
            </div>
          </div>
          <div className="caption-wrap">
            <input
              className="text-upload-input"
              type="text"
              placeholder="input caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
          </div>
          <div className="btn-box">
            <button
              type="button"
              // onclick="removeUpload()"
              className="post-image"
              onClick={handlePost}
            >
              Post
            </button>
            <button
              type="button"
              // onclick="removeUpload()"
              className="post-image back"
              onClick={() => setOpen(!open)}
            >
              Back
            </button>
          </div>
        </div>
      </Wrapper>
      {/* <Footer /> */}
    </Container>
  );
};

export default Post;
