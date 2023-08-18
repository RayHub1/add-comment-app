import React, { useState } from "react";

function Card(props) {
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState("");
  const inputHandler = (event) => {
    setNewComment(event.target.value);
    setError("");
  };

  const submitHandeler = (event) => {
    event.preventDefault();
    const newCommentData = {
      id: Math.random().toString(),
      title: newComment,
    };

    if (newComment.trim() === "") {
      setError("Comment cannot be empty");
      return;
    }
    props.formInputData(newCommentData);
    setNewComment("");
    setError("");
  };

  return (
    <div className="lg:w-1/3 w-80  rounded-lg mt-10 shadow-xl shadow-blue-100">
      <form
        className="flex flex-col items-left w- p-5"
        onSubmit={submitHandeler}
      >
        <label className="font-bold text-2xl">Add Comment</label>
        <input
          type="text"
          className="mt-3 h-10 border-2 rounded focus:outline-none p-2"
          onChange={inputHandler}
          value={newComment}
        ></input>
        <div className="text-red-500">{error}</div>
        <button className="lg:w-1/3 w-1/2 mt-3 bg-blue-500 p-2 rounded">
          Add Comment
        </button>
      </form>
    </div>
  );
}

export default Card;
