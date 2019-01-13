import React from "react";
import {Component} from "react";
import "./PostitNote.css";

export class PostitNote extends Component {

    constructor(props) {
        super(props)

        this.state = {
            delete: props.delete
        }
    }

    render() { 

        return (
            <div role="img"
            className={'PostitNote'} >
            
            <ul>
            <div className = "topBar">
            <button onClick={this.props.delete}>X</button>
            </div>

           <h2>  
           {this.props.biller} 
           </h2>   
           <h5>
            {/*  Date due:{this.props.selectedDay} */}
           </h5>
           <h5>
           You have {this.props.daysLeft} days left
           </h5>
    
           <h5>
           Amount Due: {this.props.amountPaying} 
           </h5>
    
            {this.props.body}
 
            
            </ul>
            </div>
            
                );
    }

}







