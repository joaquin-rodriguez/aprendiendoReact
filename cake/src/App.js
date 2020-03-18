import React from "react";
import "./App.css";

function apretar() {
  alert("Monika: Hey im monika I break the 4th wall haha im so quirky tho");
  alert("*what? you expected me to develop a video game in 4 hours?*");
  alert("Monika: Anyways, type your name in the box below");
}

function display() {
  let valor = document.getElementById("whatIsYourName").value;
  alert(
    "Monika: So " +
      valor +
      " huh? Wow that kind of a lame name but what was I expecting really?"
  );
  alert("*I'll continue the game tommorow :)*");
}

function App() {
  return (
    <div className="App">
      <h1 className="hello">
        Hello Ruth, I made a sequel to Doki doki literature club for you!
      </h1>
      <button onClick={apretar}>New Game</button>
      <form id="info">
        <input type="text" id="whatIsYourName"></input>
      </form>
      <button id="send" onClick={display}>
        Submit Name
      </button>
    </div>
  );
}

export default App;
