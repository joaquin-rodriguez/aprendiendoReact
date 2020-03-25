import React from "react";
import "./App.css";
import "./Survey";

function Content() {
  return (
    <div>
      <h1>Content page</h1>
      <button onClick={patientInfo} />
    </div>
  );
}

function patientInfo() {
  return document.write("info");
}

export default Content;
