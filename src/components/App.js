import React, { Component } from "react";
import AddTodo from "./AddTodo";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <AddTodo />
      </div>
    );
  }
}
