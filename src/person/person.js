import React from "react";
import './person.css'

const person = (props)=>{
    return (
        <div className = "Person">
            <p>Hi this is {props.name} and i am {props.age} years old.</p>
            <p onClick = {props.click}>{props.children}</p>
            <input type= "text" onChange={props.change} value={props.name} />
        </div>
    )
}

export default person;