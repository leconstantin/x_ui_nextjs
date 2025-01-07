import React from "react";
import Post from "./Post";

export default function Feed() {
  return (
    <div>
      <Post />
      <Post type="comment" />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
