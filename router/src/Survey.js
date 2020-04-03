import React from "react";

function display() {
  let name = document.getElementById("nombre").value;
  let lastName = document.getElementById("apellido").value;
  let age = document.getElementById("edad").value;
  let gender = document.getElementById("genero").value;
  alert("your info is " + name + ", " + lastName + ", " + age + ", " + gender);
}

function Survey() {
  return (
    <div className="questions">
      <h2>Please Fill Out The Following Form</h2>
      <form>
        <p>Name</p>
        <input type={Text} className="name" id="nombre" />
        <p>Last Name</p>
        <input type={Text} className="lastName" id="apellido" />
        <p>Age</p>
        <input type={Text} className="age" id="edad" />
        <p>Gender</p>
        <input type={Text} className="gender" id="genero" />
        <br></br>
        <button onClick={display}>Submit</button>
        <br></br>
      </form>
    </div>
  );
}

export default Survey;
