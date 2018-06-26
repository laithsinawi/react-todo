import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends Component {
  constructor(props) {
    super(props);
  }

  handleOnSubmit(e){
    e.preventDefault();
    const task = this.refs.task.value;

    this.props.dispatch(addTodo(task));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit.bind(this)}>
          <input type="text" ref="task" />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);
