import React from "react";
import "./App.css";
import Modal from "react-modal";

function content() {
  return (
    <div>
      <h2>content</h2>
      <Modal isOpen={true}>
        <table>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>34</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>64</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>23</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>33</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>12</td>
          </tr>
        </table>
      </Modal>
    </div>
  );
}

export default content;
