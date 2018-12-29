
import React, { Component } from "react";
import "../Container";
import "./Main.css";
import {Header} from "../Header";
import {PostitNote} from "../PostitNote";
import {Formname} from "../Form";


 
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {biller: 'Spotify', fields: null }
    this.state = {dateDue: 'Spotify', fields: null }
    this.state = {amountPaying: 'Spotify', fields: null }



   }

 // state = {
  //  fields: {}, 
  //}

  onSubmit = (fields) => { 
    this.setState({ biller: fields.biller });
    this.setState({ dateDue: fields.dateDue });
    this.setState({ amountPaying: fields.amountPaying });

    console.log(this.state.dateDue);

        console.log(this.state.biller);
    console.log('App comp got fields', fields);
  }
    
    render() {

 
    return (
      <div>  
      <Header />
      <p>{JSON.stringify(this.state.fields, null, 2)}</p>


      <Formname onSubmit = {fields => this.onSubmit(fields)} />


  <PostitNote biller = {this.state.biller} dateDue = {this.state.dateDue} amountPaying = {this.state.amountPaying} > 

 </PostitNote>
       </div>  
    
    )
  }
};


export default Main;

