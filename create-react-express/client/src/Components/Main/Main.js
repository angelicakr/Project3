
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
   deleteEvent = (index, _id)=> { 
     console.log(_id);
     const copyPostArray = Object.assign([], this.state.postArray);
     copyPostArray.splice(_id, 1); 
     this.setState({ 
       postArray : copyPostArray
     });

     axios.delete('/api/stickies/', _id)
     //axios.delete('/api/login', accounts)

   }   
   
  
   addPost = (fields) => {
    console.log("========: ", fields);
    

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
   
    fields.dateDue = fields.selectedDay.toString();
    fields.daysLeft = daysLeft;
    fields.reoccuring = fields.reoccuring === "Yes" ? true : false 
    axios.post('/api/stickies', fields);
    axios.get('api/stickies').then(stickyData => { 
      console.log(stickyData);
    const copyPostArray = [];
    stickyData.data.forEach(sticky => {
     copyPostArray.push(sticky);
  
    })
    return copyPostArray; 

    }).then(array => {
      this.setState({postArray:array});
      console.log(this.state.postArray);
    })

    this.postID = this.postID + 1; 
     const copyPostArray = Object.assign([], this.state.postArray) 
     copyPostArray.push({ 
      _id: this.postID,
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
          this.state.postArray.sort((a, b)=>{return a.daysLeft - b.daysLeft}).map((post, index, id)=>{ 
            console.log(index);
            return( 
              <PostitNote  key = {post._id}
              _id={post._id}
              biller = {post.biller} 
              selectedDay = {post.dateDue} 
              daysLeft = {post.daysLeft}
              amountPaying = {post.amountPaying}
              delete={this.deleteEvent.bind(this, index, post._id)}  >
              </PostitNote>
            )
          })    
            }
          </ul>
        </div>
        );
      }

}




