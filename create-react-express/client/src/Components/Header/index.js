import React from "react";
import "./Header.css";

// STATELESS
const Container = props => 
    <main className="header">
      <h1> Welcome to StickyStack! </h1>
        {props.children}
    </main>;

export default Header;