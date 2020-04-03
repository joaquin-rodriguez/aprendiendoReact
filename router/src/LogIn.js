import React from "react";

function logIn() {
  return (
    <div className="account">
      <h2>Create Your Notrix Account!</h2>
      <form className="somethingsomething">
        <p>Name</p>
        <input type={Text} />
        <p>Last Name</p>
        <input type={Text} />
        <p>Email</p>
        <input type={Text} />
        <p>Birth Date</p>
        <input type={Text} />
        <br></br>
        <button>Submit</button>
        <br></br>
      </form>
    </div>
  );
}

export default logIn;
