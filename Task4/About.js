import React, { Component } from "react";
import img from './money.jpeg';
class About extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            
            <div>
                <h1>Save the money</h1>
                <img src={img}/>
            </div>
        )
    }
}
export default About;