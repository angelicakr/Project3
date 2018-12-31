
import React, { Component } from "react";
import "../Container";
import "./Main.css";
import {Formname} from "../Form";
import { PostitNote } from "../PostitNote";
import { Header } from "../Header";
 
export default class Main extends Component {
  constructor() { 

    
    super();
    this.postID = 0;
    this.state = { 
      postArray : [ 
      ], 
    }
  }
        
   deleteEvent = (index)=> { 
     const copyPostArray = Object.assign([], this.state.postArray);
     copyPostArray.splice(index, 1); 
     this.setState({ 
       postArray : copyPostArray
     })

   }   
   
  
   addPost = (fields)=> { 
    this.setState({ biller: fields.biller });
    this.setState({ dateDue: fields.dateDue });
    this.setState({ amountPaying: fields.amountPaying });
   

     this.postID = this.postID + 1; 
     const copyPostArray = Object.assign([], this.state.postArray) 
     copyPostArray.push({ 
      id: this.postID,
      body: this.state.Body,
      
     })
     this.setState({ 
       postArray : copyPostArray

     })
    

   }
        render() {
        return (

          <div>

          <Header/>
          
          <Formname onSubmit = {fields => this.addPost(fields)} 
           />
       

          

          <ul>
            {
          this.state.postArray.map((post, index)=>{ 
            return( 
              <PostitNote 
              key = {post.id}
              id={post.id}
              biller = {this.state.biller} dateDue = {this.state.dateDue} amountPaying = {this.state.amountPaying}
              delete={this.deleteEvent.bind(this, index)}
              />

            )

          })    
         
            }
          </ul>
        </div>
        );
      }

}




