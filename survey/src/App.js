import React, { createElement } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./Nav";

function submit() {
  let nameValor = document.getElementsById("test").value;
  let lastNameValor = document.getElementsByClassName("lastName").value;
  let ageValor = document.getElementsByClassName("age").value;
  let genderValor = document.getElementsByClassName("gender").value;
  let bloodTypeValor = document.getElementsByClassName("bloodType").value;
  document.write(
    nameValor + lastNameValor + ageValor + genderValor + bloodTypeValor
  );
}

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Medical Record</h1>
      <div className="questions">
        <form>
          <p>Name</p>
          <input type={Text} className="name" id="test" />
          <p>Last Name</p>
          <input type={Text} className="lastName" />
          <p>Age</p>
          <input type={Text} className="age" />
          <p>Gender</p>
          <input type={Text} className="gender" />
          <p>Blood Type</p>
          <select>
            <option className="bloodType" value="A+">
              {" "}
              A+{" "}
            </option>
            <option className="bloodType" value="B-">
              {" "}
              B-{" "}
            </option>
            <option className="bloodType" value="A+">
              {" "}
              C{" "}
            </option>
            <br></br>
          </select>
          <br></br>
          <button onClick={submit}>Submit</button>
          <br></br>
        </form>
      </div>
    </div>
  );
}

export default App;
