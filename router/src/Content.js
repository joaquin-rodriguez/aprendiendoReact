import React from "react";
import "./App.css";
import "./Survey";

function popup() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="uuuhhh">
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <modal modalIsOpen={modalIsOpen}>
        <table>
          <tr>
            <th>Name</th>
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
      </modal>
    </div>
  );
}

export default popup;
