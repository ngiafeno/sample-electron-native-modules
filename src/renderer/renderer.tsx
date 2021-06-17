import "./css/index.less";
import React from "react";
import ReactDOM from "react-dom";

import MainPage from "./components/MainPage";
const Root: React.FC = () => {
  return <MainPage />;
};
ReactDOM.render(<Root />, document.getElementById("app"));

console.log(
  '👋 This message is being logged by "renderer.js", included via webpack'
);
