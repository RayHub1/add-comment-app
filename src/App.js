import React, { useState } from "react";

import "./index.css";
import Card from "./Components/Card";
import CommentsItems from "./Components/CommentsItems";

const DUMMY_COMMENT = [
  {
    id: "e1",
    title: "i love ray",
  },
  {
    id: "e2",
    title: "i love ray",
  },
  {
    id: "e3",
    title: "i love ray",
  },
];

function App() {
  const [initialComment, addToInitialComment] = useState(DUMMY_COMMENT);
  const newCommentData = (passedData) => {
    addToInitialComment((prevInitialComment) => [
      passedData,
      ...prevInitialComment,
    ]);
    console.log("app", passedData);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Card formInputData={newCommentData} />
      <CommentsItems items={initialComment} />
    </div>
  );
}

export default App;
