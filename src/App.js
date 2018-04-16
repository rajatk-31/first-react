import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './person/person'

class App extends Component {
  /**
   * Initial state
   */
  state = {  ///this should be a javascript object.
    persons: [
      {name: "Rajat", age: 22},
      {name: "Naveen", age: 23},
      {name: "Omprakash", age: 21}
    ]
  }

  /**
   * Switch Name Handler
   */
  switchNameHandler = (newName)=> {
    this.setState({
      persons: [
        {name: "Rajat", age: 25},
        {name: newName, age: 23},
        {name: "Omprakash", age: 21}
      ]
    })
  }

  /**
   * Name  Change Handler
   */
  nameChangeHandler = event=>{
    this.setState({
      persons: [
        {name: "Rajat", age: 25},
        {name: event.target.value, age: 23},
        {name: "Omprakash", age: 21}
      ]
    })
  }

  render() {
    /**
     * Inline styles
     */
    const style = {
      backgroundColor: "Red",
      font: "inherit",
      padding: '8px',
      border: "1px solid green",
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, this is rajat starting the react again</h1>
        <p>Something is not good</p>
        {/* One way of calling function.
          This can be inefficient at times . So try to ignore this syntax */}
        <button style={style} onClick ={()=> this.switchNameHandler("Amit")}>Switch Names</button>
        <Person name= {this.state.persons[0].name} age={this.state.persons[0].age}/>
        {/* Other way of calling function */}
        <Person name= {
          this.state.persons[1].name}
          age={this.state.persons[1].age}
          click ={this.switchNameHandler.bind(this, "Ramu!")}
          change ={this.nameChangeHandler}>Hobbies: Quiz </Person>
        <Person name= {this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
