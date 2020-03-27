import React, { createElement } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./Nav";

function display() {
  let nombre = document.getElementById("whatIsYourName").value;
  alert("your name is" + nombre);
}

function App() {
  return (
    <div className="App">
      <form id="info">
        <input type="text" id="whatIsYourName"></input>
        <button id="send" onClick={display}>
          Submit Name
        </button>{" "}
      </form>
    </div>
  );
}

export default App;
