import React from "react";

function logIn() {
  return (
    <div className="account">
      <br></br>
      <p>Don't have an account yet? Create Your Notrix Account!</p>
      <form className="somethingsomething">
        <p>Name</p>
        <input type={Text} />
        <p>Last Name</p>
        <input type={Text} />
        <p>Email</p>
        <input type={Text} />
        <p>Password</p>
        <input type={Text} />
        <br></br>
        <button>Submit</button>
        <br></br>
      </form>
    </div>
  );
}

export default logIn;
