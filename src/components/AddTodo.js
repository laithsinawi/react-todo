import React, { Component } from "react";

export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}
