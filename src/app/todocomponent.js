import React, { Component } from 'react';
import './css/todo.css';
import AddItem from './add-item';
import TodoItem from './todo-item';

class Todo extends Component {

//initializing state
  constructor(props) {
    super(props);
    this.state = {
      todoList: ['wash clothes', 'water the garden', 'buy some flowers', 'something else!']
    }
    //this.onDelete = this.onDelete.bind(this);
  }

//rendering and cycling through the data (toodoList)
  render() {
    var todoList = this.state.todoList;
    todoList = todoList.map(function(item, index) {
      return(
        <TodoItem item={item} key={index} onDelete={this.onDelete.bind(this)} />
      );
    }, this);

    return(
      <div className="component-body">
        <AddItem onAdd={this.onAdd.bind(this)} />
        <ul>
          {todoList}
        </ul>
      </div>
    );
  }

  //removing item
  onDelete(item) {
    //console.log(item);
    var updatedList = this.state.todoList.filter(function(val, index){
      return item !== val;
    });
    this.setState({
      todoList: updatedList
    })
  }

//adding items
  onAdd(item) {
    var updatedList = this.state.todoList;
        updatedList.push(item);
        this.setState({
          todoList: updatedList
        })
      }

}

export default Todo;
