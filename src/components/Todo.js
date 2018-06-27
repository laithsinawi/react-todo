import React from 'react'

const Todo = ({ text, completed, onClick }) => {
    console.log('toggleTodo', onClick);
  return (
    <li
        onClick={ onClick }
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
    {text}
    </li>
  )
}

export default Todo;