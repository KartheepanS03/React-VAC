import React, { Component } from "react";
import img1 from './gadgets.jpeg'
class Home extends Component{
    constructor() {
        super();
    }
    render(){
        return(
            <div >
                <h1 style={{color:"red"}}>Visit and Shop with us</h1>
           
                <h1>All gadgets are availabel.</h1>
                <img src={img1}/><br></br>
                <a href="https://www.amazon.in/Best-Electronic-Gadgets/s?k=Best+Electronic+Gadgets" target="_blank">Click here </a>
            </div>
        );
    }
}
export default Home;