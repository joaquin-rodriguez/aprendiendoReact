import React, { useState } from "react";
import "./App.css";
import { Button, Modal } from "react-bootstrap";

class content extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }
  handleModal() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div>
        <h2>La miel mas amarga</h2>
        <Modal show={this.state.show} onHide={() => this.handleModal()}>
          <Modal.Header closeButton>
            <Modal.Body closeButton>
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
                  <td>male</td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>4</td>
                  <td>male</td>
                </tr>
                <tr>
                  <td>Ernst Handel</td>
                  <td>Roland Mendel</td>
                  <td>64</td>
                  <td>male</td>
                </tr>
                <tr>
                  <td>Island Trading</td>
                  <td>Helen Bennett</td>
                  <td>23</td>
                  <td>male</td>
                </tr>
                <tr>
                  <td>Laughing Bacchus Winecellars</td>
                  <td>Yoshi Tannamuri</td>
                  <td>33</td>
                  <td>male</td>
                </tr>
                <tr>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Giovanni Rovelli</td>
                  <td>12</td>
                  <td>male</td>
                </tr>
              </table>
              <Button
                onClick={() => {
                  this.handleModal();
                }}
              >
                Close
              </Button>
            </Modal.Body>
          </Modal.Header>
        </Modal>
        <Button
          onClick={() => {
            this.handleModal();
          }}
        >
          Open user info
        </Button>
      </div>
    );
  }
}

export default content;
