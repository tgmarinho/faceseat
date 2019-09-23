import React from "react";

import "./style.css";
import Comment from "../Comment";

function Post({ data }) {
  return (
    <div className="post-container">
      <div>
        <div className="container-profile">
          <img className="post-avatar" src={data.author.avatar} />
          <div className="wrapper-profile">
            <h3>{data.author.name}</h3>
            <small>{data.date}</small>
          </div>
        </div>

        <div className="post-content">
          <p>{data.content}</p>
        </div>

        <hr />

        {data.comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </div>
    </div>
  );
}

export default Post;
