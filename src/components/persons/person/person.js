import React, {Component} from "react";
// import Radium from 'radium';
import clas from './person.css'

class Person extends Component{
    render() {
        return (
            <div className = {clas.Person}>
                <p onClick={this.props.click}>Hi this is {this.props.name} and i am {this.props.age} years old.</p>
                {/* <p onClick = {this.props.click}>{this.props.children}</p> */}
                <input type= "text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
}
    // const styles ={
    //     '@media (min-width:500px)': {
    //         width: '450px'
    //     }
    // }
     


export default Person;