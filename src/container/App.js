import React, { Component } from 'react';
// import Radium, {StyleRoot} from 'radium';
import clas from './App.css';
import Person from '../components/persons/person/person';
import Persons from '../components/persons/persons';
import Cockpit from '../components/cockpit/cockpit'

class App extends Component {
  /**
   * Initial state
   */
  state = {  ///this should be a javascript object.
    persons: [
      {key:"rajat1", name: "Rajat", age: 22},
      {key:"rajat2", name: "Naveen", age: 23},
      {key:"rajat3", name: "Omprakash", age: 21}
    ],
    showPerson: false
  }

  /**
   * Switch Name Handler
   */
  switchNameHandler = (newName)=> {
    this.setState({
      persons: [
        { name: "Rajat", age: 25},
        { name: newName, age: 23},
        { name: "Omprakash", age: 21}
      ]
    })
  }

  /**
   * Name  Change Handler
   */
  nameChangeHandler = (event,key)=>{
    const personIndex=this.state.persons.findIndex(p=>{
      return p.key===key;
    })
    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
    // this.setState({
    //   persons: [
    //     { name: "Rajat", age: 25},
    //     { name: event.target.value, age: 23},
    //     { name: "Omprakash", age: 21}
    //   ]
    // })
  }

  /**
   * Toggle Handler
   */
  toggleHandler = ()=>{
    this.setState({
      showPerson: !this.state.showPerson
    })
  }

    /**
     * Delete Person
     */
    deletePerson = index => {
      // const per = this.state.persons;
      const per= [...this.state.persons]
      per.splice(index,1);
      this.setState({persons: per})
    }

  render() {
    /**
     * Inline styles
     */
    
    let personss= null;
    if(this.state.showPerson){
      personss= (
        <div>
          <Persons 
          persons = {this.state.persons}
          clicked={this.deletePerson}
          changed={this.nameChangeHandler}/>
          
          {/* <Person name= {this.state.persons[0].name} age={this.state.persons[0].age}/>
        
          <Person name= {
            this.state.persons[1].name}
            age={this.state.persons[1].age}
            click ={this.switchNameHandler.bind(this, "Ramu!")}
            change ={this.nameChangeHandler}>Hobbies: Quiz </Person>
          <Person name= {this.state.persons[2].name} age={this.state.persons[2].age}/> */}
        </div>
      )
    }
    const classes = [];
    if(this.state.persons.length<=3){
      classes.push(clas.Red)
    }
    if(this.state.persons.length>=2){
      classes.push(clas.Bold)
    }
    if(this.state.showPerson){
      classes.push('Green')
    }
    return (
      
        <div className={clas.App}>
          <Cockpit 
          persons={this.state.persons}
          clicked={this.toggleHandler}/>
          {personss}
        </div>
    );
  }
}

export default App;
