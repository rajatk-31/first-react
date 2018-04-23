import React from 'react';
import Person from './person/person'

const persons = (props)=>props.persons.map((person,index)=>{
        return <Person 
          name={person.name}
          age={person.age}
          key ={person.key}
          changed = {(event)=>props.changed(event,person.key)}
          click ={()=>props.clicked(index)
        }></Person>
      })

export default persons