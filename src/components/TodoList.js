import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/index';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Todo List</h3>
                <ul>
                {this.props.todos.map( todo => (
                    <Todo 
                        key={todo.id}
                        {...todo}
                        onClick={() => this.props.toggleTodo(todo.id)}
                    />                    
                ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
