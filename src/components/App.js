import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <AddTodo />
        <hr />
        <TodoList />
        <Footer />
      </div>
    );
  }
}
