import React from "react";
import "./style.css";

function Comment({ data }) {
  return (
    <div className="comment-container">
      <img className="comment-avatar" src={data.author.avatar} />
      <div className="comment-wrapper">
        <p className="comment-text">
          <strong>{data.author.name}</strong> {data.content}
        </p>
      </div>
    </div>
  );
}

export default Comment;
