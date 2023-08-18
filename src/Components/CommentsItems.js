import React, { useState } from "react";
import Comments from "./Comments";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function CommentsItems(props) {
  return (
    <div className="lg:w-1/3 w-80 mt-10">
      {props.items.map((data) => (
        <Comments title={capitalizeFirstLetter(data.title)} key={data.id} />
      ))}
    </div>
  );
}

export default CommentsItems;
