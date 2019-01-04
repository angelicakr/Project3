import React from "react";
import "./Header.css";
import {Component} from "react";

// STATELESS
export class Header extends Component {
    render() { 

        return (
        <div>
      
         <button className="logout">Log Out</button>
         <div className = "welcome">Welcome Username</div>   
        <div className = "header">  
        </div>  

        <div className ="intro"> 
        <h1>Add your bill’s below and we’ll remind you when they’re due.</h1>
        </div> 
        </div>
        );
    }

}

