
import React, { Component } from "react";
import "../Container";
import {Formname} from "../Form";
import { PostitNote } from "../PostitNote";
import { Header } from "../Header";
import "./Main.css";
 
export default class Main extends Component {
  constructor() { 

    
    super();

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
   

     const copyPostArray = Object.assign([], this.state.postArray) 
     copyPostArray.push({ 
      id: this.postID,
      biller: this.state.biller
    
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
            console.log(post);
            return( 
              <PostitNote 
                key = {post.id}
                id={post.id}
                biller = {post.biller} dateDue = {this.state.dateDue}
                amountPaying = {this.state.amountPaying}
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




