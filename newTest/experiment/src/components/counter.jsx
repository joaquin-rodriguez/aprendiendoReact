import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "http://picsum.photos/200",
    tags: ["tag1", "tag 2", "tag 3"]
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };

  render() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";

    return (
      <div>
        <img src={this.state.imageUrl} />
        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
