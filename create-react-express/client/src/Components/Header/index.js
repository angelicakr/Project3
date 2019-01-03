import React from "react";
import "./Header.css";
<<<<<<< HEAD

// STATELESS
const Container = props => 
    <main className="header">
      <h1> Welcome to StickyStack! </h1>
        {props.children}
    </main>;

export default Header;
=======
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

>>>>>>> f645471f0ca1a9c5148020c8e32ee21a832c80e4
