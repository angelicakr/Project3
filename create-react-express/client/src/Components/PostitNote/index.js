import React from "react";
import {Component} from "react";
import "./PostitNote.css";


export class PostitNote extends Component {
    render() { 

        return (
            <div role="img"
            className={'PostitNote'} >
            
            <ul>
           <h1>  
           {this.props.biller} 
           </h1>   
           <h5>
           Date due:{this.props.dateDue} 
           </h5>
    
           <h5>
           Amount Due: {this.props.amountPaying} 
           </h5>
    
            {this.props.body}
 
            <button onClick={this.props.delete}>Delete</button>
            </ul>
            </div>
            
                );
    }

}







