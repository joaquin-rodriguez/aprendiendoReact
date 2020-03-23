import React, { Component } from "react";

class displayAnswers extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>CONTENT WILL BE DISPLAYED HERE</h1>
        <table style="width:100%">
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Joaquin</td>
            <td>Rodriguez</td>
            <td>21</td>
          </tr>
          <tr>
            <td>Ruth</td>
            <td>less</td>
            <td>22</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default displayAnswers;
