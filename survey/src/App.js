import React, { createElement } from "react";
import "./App.css";

function submit() {
  let nameValor = document.getElementsByClassName("name").value;
  let lastNameValor = document.getElementsByClassName("lastName").value;
  let ageValor = document.getElementsByClassName("age").value;
  let genderValor = document.getElementsByClassName("gender").value;
  let bloodTypeValor = document.getElementsByClassName("bloodType").value;
  alert(nameValor + lastNameValor + ageValor + genderValor + bloodTypeValor);
}

function App() {
  return (
    <div className="App">
      <h1>Medical Record</h1>
      <div className="questions">
        <form>
          <p>Name</p>
          <input type={Text} className="name" />
          <p>Last Name</p>
          <input type={Text} className="lastName" />
          <p>Age</p>
          <input type={Text} className="age" />
          <p>Gender</p>
          <input type={Text} className="gender" />
          <p>Blood Type</p>
          <input type={Text} className="bloodType" /> <br></br>
          <button onClick={submit}>Submit </button>
        </form>
      </div>
    </div>
  );
}

export default App;
