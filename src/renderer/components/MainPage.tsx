import React from "react";

export const MainPage: React.FC = () => {
  const add = async () => {
    const result = window.Natives.addition(1, 6);
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
