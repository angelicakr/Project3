
import React, { Component } from "react";
import "../Container";
import {Formname} from "../Form";
import { PostitNote } from "../PostitNote";
import { Header } from "../Header";
import "./Main.css";
import axios from "axios";
import moment from 'moment';
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

    console.log(fields);

    let duration =  moment().diff(fields.selectedDay.toString());
    var daysLeftnotrounded = moment.duration(duration).asDays();
    var daysLeft = (Math.floor(Math.abs(daysLeftnotrounded)));
    console.log(daysLeft);
    console.log(Math.floor(Math.abs(duration)));
    this.setState({ 
      biller: fields.biller,
      selectedDay: fields.selectedDay,
      amountPaying: fields.amountPaying,
      daysLeft: daysLeft,
    });
    axios.post('/api/stickies', fields);
    axios.get('api/stickies').then(stickyData => { 
    const copyPostArray = [];
    stickyData.forEach(sticky => {
     copyPostArray.push(sticky);
  
    }).then(postArray => { 
      this.setState({
        postArray:postArray
      })
    })  

    })
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
            console.log(index);
            return( 
              <PostitNote  key = {post.id}
              id={post.id}
              biller = {this.state.biller} 
              selectedDay = {this.state.selectedDay} 
              daysLeft = {this.state.daysLeft}
              amountPaying = {this.state.amountPaying}
              delete={this.deleteEvent.bind(this, index)}  >
              </PostitNote>
            )
          })    
            }
          </ul>
        </div>
        );
      }

}




