import React, {Component} from 'react'
import TodoItems from './TodoItems'

export default class NewTodo extends Component {
  constructor(props){
    super(props)
    this.state = {      
      todos: ['test1', 'test2']
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }

  removeTodo(input){
    this.setState(prevState => {
      return {todos: prevState.todos.filter(val => val !== input)}
    })   
  }

  handleSubmit(e){
    e.preventDefault();
    if(e.target.todoitem.value){     
      this.setState(prevState => {
        return {todos: prevState.todos.push(e.target.todoitem.value)}
      })
      e.target.todoitem.value = ''  
    }      
  }  

  render(){
    return (
      <div className="NewTodo">
        <form className="input_form" onSubmit={this.handleSubmit} autoComplete='off'>
          <input className="input_todoitem" name="todoitem" placeholder="NewTodo" />
          <input type="submit" className="btn btn-primary" value="Add" />
        </form>
        <TodoItems todos={this.state.todos} removeTodo={this.removeTodo}/>
      </div>
    )
  }
}

