import React, { Component } from 'react';
import './css/add-item.css';

class AddItem extends Component {
  render() {
    return(
      <div className="add-item">
        <form id="add-todo" onSubmit={this.handleSubmit}>
          <input type="text" ref="newItem" className="write-here" placeholder="Write your task here..." />
          <input type="submit" value="Add Me" className="submit" />
        </form>
      </div>
    );
  }

  //custom function
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
  }

}

export default AddItem;
