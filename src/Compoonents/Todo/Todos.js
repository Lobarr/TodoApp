import React, { Component } from 'react'
import NewTodo from './NewTodo'
import './Todos.css'


export default class Todos extends Component {
  render(){    
    return (
      <div className="Todos">
        <NewTodo/>        
      </div>
    )
  }
}

