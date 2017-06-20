import React, { Component } from 'react'
import Todos from '../Todo/Todos'
import './App.css';

export default class App extends Component {
  render(){
    return (
      <div className="App">
        <Todos />
      </div>      
    )
  }
}

