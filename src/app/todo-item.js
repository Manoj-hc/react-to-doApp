import React, { Component } from 'react';

import './css/todo.css';


class TodoItem extends Component {
  render() {
    return(
      <li className="list">
        <div>
          <span className="item"> {this.props.item} </span>
          <span className="handle-delete" onClick={this.handleClick}> x </span>
        </div>
      </li>
    );
  }
  //Custom function
  handleClick = () => {
    this.props.onDelete(this.props.item);
  }
}

export default TodoItem;
