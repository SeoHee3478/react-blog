import React, { useState, useEffect } from "react";
import Post from "./Post.jsx";
import "./Author.css";
import "./Category.css";
import "./Post.css";
import "./Posts.css";

export default function Posts(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/data.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data.posts);
  return (
    <>
      <div class="max-width">
        <h2 class="a11y-hidden">Post</h2>
        <ul class="posts">
          {/* <Post thumbnail={data.post.thumbnail} /> */}
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          {/* {data.map((data) => {
            return <Post thumbnail={data.post.thumbnail} />;
          })} */}
        </ul>
      </div>
    </>
  );
}
