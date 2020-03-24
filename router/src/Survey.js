import React from "react";

function Survey() {
  return (
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
        <br></br>
        <button>Submit</button>
        <br></br>
      </form>
    </div>
  );
}

export default Survey;
