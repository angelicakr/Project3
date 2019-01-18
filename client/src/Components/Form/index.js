import React, { Component } from 'react';
import "./form.css";
import 'react-day-picker/lib/style.css';

import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import DayPicker from '../DayPicker';
export class Formname extends Component {
    onSubmit = e => { 
      e.preventDefault();
      this.props.onSubmit(this.state);
    };
      state = { 
          biller: "", 
          selectedDay: "", 
          amountPaying: "", 
          amountPaying: "", 
          reoccuring: "", 
          howOften: "", 
      }
    change = (e) => {
      console.log("EVENT:  ", e.target.value)
        this.setState({
            [e.target.name]: e.target.value

        });
    }; 
    changeDay = (day) => {
      console.log('22222222')
      console.log(day)
      this.setState({
        selectedDay: day.toString()
    });
    }
  render() {
    return (
      <Container className="App">
        <Form className="form">
        <Col>
        <h2>Bill Info</h2>
        </Col>
          <Col>
            <FormGroup>
              <Label>Who are you paying?</Label>
              <br></br>
              <Input
                name ="biller"
                placeholder="Spotify.com"
                value={this.state.biller}
                onChange={e => this.change(e)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>When is your next Bill Due?</Label>
            
               <DayPicker
               name="selectedDay"
               changeDay={this.changeDay}
               value={this.state.selectedDay}
               onChange={e => this.change(e)}
               ></DayPicker>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">What amount are you paying?</Label>
              <br></br>
              <Input
                name="amountPaying"
                  placeholder="$20.00"
                  value={this.state.amountPaying}
                  onChange={e => this.change(e)}
              />
            </FormGroup>
          </Col>


          <Col>  
          <FormGroup>

          </FormGroup>

          </Col>

          

          
          <Button onClick={e => this.onSubmit(e)} >Submit</Button>
        </Form>
      </Container>
    );
  }
}



