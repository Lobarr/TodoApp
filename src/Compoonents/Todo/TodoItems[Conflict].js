import React, { Component } from 'react'
import FlipMove from 'react-flip-move'

export default class TodoItems extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(val){
    if(val){
      this.props.removeTodo(val)
    }
  }
  
  renderTodos(){
    if(this.props.todos){
      return this.props.todos.map((val, index) => {
        return (
          <li className="todo_li" key={index}>
            <p className="">{val}</p>
            <button className="btn btn-danger" onClick={this.handleClick(val)}>Remove</button>
          </li>
        )
      })
    }else {
      return <li className="todo_li">No todos...</li>
    }    
  }

  render(){
    return (
      <ul className="todo_ul">
        <FlipMove>
          {this.renderTodos()}
        </FlipMove>
      </ul>
    )
  }
}