import React from "react";
import "./PostitNote.css";
import "./PostitNote.css";







export const PostitNote = props => (
    <div>
    <div  role="img"
        className={`PostitNote ${props.animate? "animated wobble": ""}`} >
       
     <div className = "topBar">
     <span className="x">X</span>
     <p> {props.biller} </p>


     </div>
     <p> {props.dateDue} </p>
     <p> {props.amountPaying} </p>


    </div>
</div>



);





