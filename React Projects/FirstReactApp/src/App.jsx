import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="form">
        <img src="./travele-logo-main.png" alt="" />
        <h2>Log Into Your InVision Account</h2>
        <form action="">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="button" value="LOGIN" />
        </form>
      </div>
    </div>
  );
}

export default App;
