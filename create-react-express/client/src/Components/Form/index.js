import React, { Component } from 'react';
import "./form.css";

import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

export class Formname extends Component {


    onSubmit = e => { 
      e.preventDefault();
      this.props.onSubmit(this.state);
    };


      state = { 
          biller: "", 
          dateDue: "", 
          amountPaying: "", 
          amountPaying: "", 
          reoccuring: "", 
          howOften: "", 
      }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        });
    }; 

      
    
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
              <Input
                name ="biller"
                placeholder="Spotify.cpm"
                value={this.state.biller}
                onChange={e => this.change(e)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>When is your next Bill Due?</Label>
              <Input
                name="dateDue"
                placeholder="January 2018"
                value={this.state.dateDue}
                onChange={e => this.change(e)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">What amount are you paying?</Label>
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
              <Label>Is this a reoccuring payment?</Label>
              <Input
                name="reoccuring"
                placeholder="yes or no"
                value={this.state.reoccuring}
                onChange={e => this.change(e)}
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label>How often does this repayment occur?</Label>
              <Input
                  name="howOften"
                  placeholder="30 days"
                  value={this.state.howOften}
                  onChange={e => this.change(e)}  />
            </FormGroup>
          </Col>
          <Button onClick={e => this.onSubmit(e)}>Submit</Button>
        </Form>
      </Container>
    );
  }
}

