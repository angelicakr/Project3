import React from "react";
import {Component} from "react";
import "./PostitNote.css";


export class PostitNote extends Component {
    render() { 

        return (
            <div role="img"
            className={'PostitNote'} >
            
            <li>
           biller = {this.props.biller} 
           <br></br>
           Days due ={this.props.dateDue} 
           <br></br>
            amountPaying = {this.props.amountPaying} 
            <br></br>
            id = {this.props.id}
            <br/>
            {this.props.body}
            <br/>
            <button onClick={this.props.delete}>Delete</button>
            </li>
            </div>
            
                );
    }

}







