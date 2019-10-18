import React, { Fragment } from 'react';
import ToDo from './containers/todo/todo';
import Title from './companents/title/title' 
import './App.css';

const App = () => (
  <Fragment>
    <Title title="Todo App" />
    <ToDo />
  </Fragment>
);

export default App;