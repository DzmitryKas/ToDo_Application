import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../todo-item/todo-item';

import './todo-list.css';

const ToDoList = ({ tasksList, removeTask }) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted}) => (
      <ToDoItem removeTask={removeTask} id={id} ket={id} text={text} isCompleted={isCompleted} />
    ))}
  </ul>  
);

ToDoList.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,  
}

ToDoList.defaultProps = {
  tasksList: [], 
  removeTask: () => {} 
}

export default ToDoList