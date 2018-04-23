import React from 'react';
import clas from './cockpit.css'

const cockpit = props =>{
    const style = {
        backgroundColor: "white",
        font: "inherit",
        padding: '8px',
        border: "1px solid red",
        cursor: 'pointer',
        // ':hover': {
        //   backgroundColor: 'black',
        //   color: 'white'
        // }
      }
    const classes = [];
    if(props.persons.length<=3){
      classes.push(clas.Red)
    }
    if(props.persons.length>=2){
      classes.push(clas.Bold)
    }
    if(props.showPerson){
      classes.push('Green')
      style.backgroundColor = 'red'
    }
    return (
        <div>
            <h1>Hi, this is react again</h1>
          <p className = {classes.join(' ')}>Something is not good</p>
          {/* One way of calling function.
            This can be inefficient at times . So try to ignore this syntax */}
          {/* <button style={style} onClick ={()=> this.switchNameHandler("Amit")}>Switch Names</button> */}
          <button style={style} onClick ={props.clicked}>Switch Names</button>
        </div>
    )
}

export default cockpit;