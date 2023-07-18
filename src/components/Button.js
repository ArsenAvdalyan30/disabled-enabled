import React, { Component } from "react";

class Button extends Component {
  componentDidMount() {
    console.log("Button didMount");
  }

  render() {
    return (
      <button disabled={true} onClick={this.props.onClick} {...this.props}>
        {" "}
        {this.props.children}
      </button>
    );
  }
}

export default Button;
