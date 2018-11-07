import React, { Component } from 'react';
//import logo from './logo.svg';
import './css/App.css';
import Todo from './todocomponent';

//injecting all the components to the DOM
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <p> Add your task here and I wll remind you!  </p>
        </div>
        <Todo />
      </div>
    );
  }
}

export default App;
