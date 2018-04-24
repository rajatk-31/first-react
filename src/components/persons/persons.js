import React, {Component} from 'react';
import Person from './person/person'
//can also use pureComponent instead of Component but this shouldn't be used if necessary
class Persons extends Component {
  render () {
    /**
     * 086 Component Updating Lifecycle in Action
     * Order of initializaton
     * 1. componentWillReceiveProps(nextProps)
     * 2. shouldComponentUpdtae(nextProps,nextState) --return true or false if true the component will update otherwise not although state will change everytime
     * 3. componentWillUpdate(nextProps, nextSTate)
     * 4. render()
     * 5. componentDidUpdate()
     */
    return this.props.persons.map((person,index)=>{
      return <Person 
        name={person.name}
        age={person.age}
        key ={person.key}
        changed = {(event)=>this.props.changed(event,person.key)}
        click ={()=>this.props.clicked(index)
      }></Person>
    })
  }
}

export default Persons