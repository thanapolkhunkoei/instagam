import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  SendOutlined,
  HeartOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import Post from "../pages/Post";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 470px;
  height: auto;
  max-width: 470;
  margin-top: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(219, 219, 219, 219);
  border-radius: 8px;
  /* padding: 10px; */
  margin-top: 15px;
  overflow: scroll;
`;

const Wrapper = styled.div`
  width: 100%;
  .user-box {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    padding: 8px;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
      object-fit: cover;
    }
    p {
      font-weight: bold;
    }
  }
  .image {
    width: 100%;
    margin-bottom: 10px;
    img {
      width: 100%;
    }
  }

  .icon {
    width: 90px;
    display: flex;
    justify-content: space-between;
    margin: 10px;
    cursor: pointer;
  }
  .caption {
    display: flex;
    font-size: 12px;
    margin: 5px 10px;
    span {
      font-weight: bold;
      margin-right: 5px;
      font-size: 12px;
    }
  }
  .comment {
    max-width: 470px;
    display: flex;
    justify-content: flex-start;
    /* align-items: center; */
    gap: 10px;
    margin: 5px 10px;
    overflow: scroll;

    .Image {
      width: auto;
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 10px;
        object-fit: cover;
      }
    }
    span {
      width: auto;
      font-weight: bold;
      font-size: 12px;
    }
    .text {
      width: auto;
      p {
        width: auto;
        font-size: 12px;
      }
    }
  }
`;

const Form = styled.form`
  width: 100%;
  /* background-color: aqua; */
  border-top: 1px solid rgba(219, 219, 219, 219);
  display: flex;
  justify-content: space-between;
  input {
    width: 80%;
    border: none;
    outline: none;
    padding: 12px;
  }
  button {
    color: #57cbf5;
    border: none;
    background-color: white;
    padding: 10px;
    cursor: pointer;
  }
`;

const Content = ({ open, setOpen }) => {
  const [feeds, setFeeds] = useState([]);
  const [caption, setCaption] = useState("");
  const [img, setImg] = useState("");
  const [comment, setComment] = useState("");
  const [userComment, setUserComment] = useState(
    JSON.parse(localStorage.getItem("ีuserComment")) || []
  );

  const navigate = useNavigate();

  const post = () => {
    navigate("/post");
  };

  const urlImg =
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";

  const [user, setUser] = useState("Golf");
  const [userCover, setUserCover] = useState(urlImg);

  const feedUrl =
    "https://run.mocky.io/v3/a210a8f1-530c-42f1-b46f-25bd65d558fa";

  const getFeed = () => {
    axios.get(feedUrl).then((res) => setFeeds(res.data.feeds));
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify());
  }, []);

  useEffect(() => {
    getFeed();
  }, []);

  //covert img
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onabort = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };
  //handle img
  const handleImg = (e) => {
    const file = e.target.files[0];
    getBase64(file).then((base64) => {
      localStorage["img"] = base64;
      console.debug("File Store", base64);
    });
  };

  const handlePost = (e) => {
    e.preventDefault();
    localStorage.setItem("caption", caption);
    setOpen(false);
    getUserFeed();
  };

  //   console.log(feeds);

  const handleComment = (e, index) => {
    e.preventDefault();
    setUserComment([
      ...userComment,
      {
        username: user,
        userCover: userCover,
        comment: comment,
        id: Date.now(),
      },
    ]);
    setComment("");
  };
  useEffect(() => {
    localStorage.setItem("userComment", JSON.stringify(userComment));
  }, [userComment]);
  useEffect(() => {
    const getComment = JSON.parse(localStorage.getItem("userComment"));
    if (getComment) {
      setUserComment(getComment);
    }
  }, []);

  const getUserFeed = () => {
    setImg(localStorage.getItem("img"));
    setCaption(localStorage.getItem("caption"));
  };

  useEffect(() => {
    setImg(localStorage.getItem("img"));
    setCaption(localStorage.getItem("caption"));
  }, []);

  //   console.log(caption);

  console.log(comment);
  console.log(userComment);

  return (
    <>
      {open && (
        <Post
          handleImg={handleImg}
          handlePost={handlePost}
          caption={caption}
          setCaption={setCaption}
          setOpen={setOpen}
          open={open}
        />
      )}
      {!open && (
        <>
          {img && caption && (
            <Container>
              <Wrapper>
                <div className="user-box">
                  <img src={userCover} alt="" />
                  <p>{user}</p>
                </div>
                <div className="image">
                  <img src={img} alt="" />
                </div>
                <div className="icon">
                  <HeartOutlined style={{ fontSize: "20px" }} />
                  <MessageOutlined style={{ fontSize: "20px" }} />
                  <SendOutlined
                    style={{ fontSize: "17px", marginLeft: "5px" }}
                    rotate={-45}
                  />
                </div>
                <div className="caption">
                  <span>{user}</span>
                  <p>{caption}</p>
                </div>
                <Form>
                  <input type="text" placeholder="Add a comment" />
                  <button>Post</button>
                </Form>
              </Wrapper>
            </Container>
          )}
          {feeds.map((feed, index) => (
            <Container key={index}>
              <Wrapper>
                <div className="user-box">
                  <img src={feed.userCover} alt="" />
                  <p>{feed.username}</p>
                </div>
                <div className="image">
                  <img src={feed.image.url} alt="" />
                </div>
                <div className="icon">
                  <HeartOutlined style={{ fontSize: "20px" }} />
                  <MessageOutlined style={{ fontSize: "20px" }} />
                  <SendOutlined
                    style={{ fontSize: "17px", marginLeft: "5px" }}
                    rotate={-45}
                  />
                </div>
                <div className="caption">
                  <span>{feed.username}</span>
                  <p>{feed.image.caption}</p>
                </div>
                {feed.comments.map((com, index) => (
                  <div key={com.id} className="comment">
                    <div className="Image">
                      <img src={com.userCover} alt="" />
                    </div>
                    <span>{com.username}</span>
                    <div className="text">
                      <p>{com.commentText}</p>
                    </div>
                  </div>
                ))}
                {userComment.map((com, index) => (
                  <div key={index} className="comment">
                    <div className="Image">
                      <img src={com.userCover} alt="" />
                    </div>
                    <span>{com.username}</span>
                    <div className="text">
                      <p>{com.comment}</p>
                    </div>
                  </div>
                ))}
                <Form onSubmit={handleComment}>
                  <input
                    type="text"
                    value={comment}
                    placeholder="Add a comment"
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <button type="submit">Post</button>
                </Form>
              </Wrapper>
            </Container>
          ))}
        </>
      )}
    </>
  );
};

export default Content;
