import React, { Component } from 'react'
import { connect } from 'react-redux';

class TodoList extends Component {
    render() {
        return (
            <div>
                Todo List
                <ul>
                {this.props.todos.map( (todo, index) => (
                    <li key={index}>{todo.text}</li>
                ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps)(TodoList);
