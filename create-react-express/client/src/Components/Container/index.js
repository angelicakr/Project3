<<<<<<< HEAD
=======

>>>>>>> f645471f0ca1a9c5148020c8e32ee21a832c80e4
import React from "react";
import "./Container.css";

// STATELESS
const Container = props => 
    <main className="container">
        {/* passing in other components through children in Game.js */}
        {props.children}
    </main>;

export default Container;