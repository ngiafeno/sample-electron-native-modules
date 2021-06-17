import React from "react";
import { ipcRenderer } from "electron";
import { ADD } from "../../common/communication";

export const MainPage: React.FC = () => {
  const add = async () => {
    const result = await ipcRenderer.invoke(ADD, 1, 5);
    console.log(result);
  };
  return (
    <div>
      <h1>Hello</h1>
      <p> Here the landing page</p>
      <button onClick={add}>CLICK HERE</button>
    </div>
  );
};

export default MainPage;
