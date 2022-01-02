import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    console.log('constructor')
    super()
    this.state = {
      count: 0,
      show: false
    }
  }
  increment = () => {
    console.log()
  }
  componentDitMount() {
   console.log('componentDidMount')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  render() {
    console.log('render')
    return (
      <div>
        <button onClick={() => this.setState({ show: !this.state.show })} >show</button><br/>
    
        {this.state.show && 'yasssmine khedher im a student'}<br/>
         {this.state.show ? <img src='https://www.technojobs.co.uk/info/sites/www.technojobs.co.uk/files/styles/article_image_large/public/Where-to-Get-the-Best-Salary-as-a-Software-Developer-in-Canada_112185177.jpeg?itok=Xlewv5h9'/>: null }
      </div>
    )
  }
}


