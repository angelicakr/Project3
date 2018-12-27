
import React, { Component } from "react";
import "../Container";
import "./Stickies2.css";
import {Header} from "../Header";
import {PostitNote} from "../PostitNote";
import {Formname} from "../Form";


 
class Stickies2 extends Component {



  state = {
    fields: {}, 
  }

  onSubmit = (fields) => { 
    this.setState({ fields})
    console.log('App comp got fields', fields);
  }
    

    
    render() {

 
    return (
      <div>  
      <Header />
      <Formname onSubmit = {fields => this.onSubmit(fields)}/>
      <p>{JSON.stringify(this.state.fields, null, 2)}</p>
      <PostitNote

      
    

      />
       </div>  
    
    )
  }
};


export default Stickies2;

