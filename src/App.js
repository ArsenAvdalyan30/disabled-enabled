import "./App.css";
import React, { Component } from "react";
import Button from "./components/Button";

class App extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChangeUserName = (e) => {
    this.setState({ username: e.target.value });
  };

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <>
        <input
          username={this.state.username}
          name="username"
          onChange={this.handleChangeUserName}
        />
        <input
          password={this.state.password}
          name="password"
          onChange={this.handleChangePassword}
        />
        <Button
          disabled={
            !(
              this.state.username.length >= 2 && this.state.password.length >= 2
            )
          }
          onClick={this.handleClick}
        >
          Login
        </Button>
      </>
    );
  }
}
export default App;
