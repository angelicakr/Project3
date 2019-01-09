
import React, { Component } from "react";
import "../Container";
import {Formname} from "../Form";
import { PostitNote } from "../PostitNote";
import { Header } from "../Header";
import "./Main.css";
import axios from "axios";
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


   addPost = (fields) => {
    this.setState({ 
      biller: fields.biller,
      selectedDay: fields.selectedDay,
      amountPaying: fields.amountPaying
    });

    axios.post('/api/stickies', fields)


   

     this.postID = this.postID + 1; 
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


              <PostitNote  key = {post.id}
              id={post.id}
              biller = {this.state.biller} selectedDay = {this.state.selectedDay} amountPaying = {this.state.amountPaying}
              delete={this.deleteEvent.bind(this, index)} >


            <Moment>  </Moment>
              
            
              
              </PostitNote>

           

            )

          })    
         
            }
          </ul>
        </div>
        );
      }

}




