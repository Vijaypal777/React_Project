import React from 'react'

function TodoItem(props) {
  return (
    <li className='todo-item'>
        <span>
        {props.completed ? <></>:<input type='checkbox'/>}
        <span className='todo-item-text'>{props.text}</span>
        </span>
        <p className='dot'>...</p>
    </li>
  )
}

export default TodoItem