import React from "react";
import "./PostitNote.css";
import "./PostitNote.css";




export const PostitNote = props => (
    <div
        role="img"
        aria-label="click item"
        className={`PostitNote ${props.animate? "animated wobble": ""}`} 
        style={{ backgroundImage: `url("${props.image}")` }}
        onClick={() => props.handleClick(props.id)}



    /> 
);





