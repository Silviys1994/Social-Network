import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost, updateNewPostText } from "./redux/state.js";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntireTree = (state) => {
  root.render(
    <HashRouter>
      <React.StrictMode>
        <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
        />
      </React.StrictMode>
    </HashRouter>
  );
};

export default rerenderEntireTree;
