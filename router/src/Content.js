import React from "react";
import "./App.css";
import "./Survey";

function Content() {
  return (
    <div>
      <h1>Content page</h1>
      <div className="survey">
        <table>
          <tr>
            <th>Namw</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
          <tr>
            <td>Joaquin</td>
            <td>Rodriguez</td>
            <td>21</td>
            <td>Male</td>
          </tr>
        </table>
      </div>
      <button onClick={patientInfo} />
    </div>
  );
}

function patientInfo() {
  return document.write(test);
}

export default Content;
