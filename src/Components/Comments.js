import React from "react";

function Comments(props) {
  return (
    <div className="rounded-md mt-3 shadow-lg bg-blue-500 px-5 py-2 text-white">
      {props.title}
    </div>
  );
}

export default Comments;
