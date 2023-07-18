import React, { Component } from "react";

class Section extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="section">
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Section;
