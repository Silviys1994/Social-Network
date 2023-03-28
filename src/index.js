import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let dialogs = [
  { id: 1, name: "Andrey" },
  { id: 2, name: "Oleg" },
  { id: 3, name: "Vlad" },
];

let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Yo" },
  { id: 3, message: "Nani?" },
];

let posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 15 },
  { id: 2, message: "It`s my first post", likesCount: 11 },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
