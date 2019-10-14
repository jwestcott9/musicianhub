import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import API from "../../utils/API";

export default class Example extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        loggedIn: false,
        user: null,
        loading: true,
        email: "",
        firstName: "",
        lastName: "",
        instrument: "",
        bio: "",
        private: false,
        image: "",
        username: ""
    }
    this.handleFormSubmit =this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount(){
    console.log(this.props)
    if(this.props.loggedIn){
      this.setState({
        loggedIn: this.props.loggedIn,
        _id: this.props.user._id,
        email: this.props.user.email,
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        instrument: this.props.user.instrument,
        bio: this.props.user.bio,
        private: this.props.user.private,
        image: this.props.user.image,
        username: this.props.user.username
      }, ()=>{
        console.log(this.state);
      })
    }
  }
  handleFormSubmit = event =>{
    event.preventDefault();
    console.log()
    console.log(this.state);
    API.updateProfile(this.state).then(user =>{
      console.log(user);
    })
  }

  handleInputChange = event =>{
    console.log(event.target.name);
    console.log(event.target.value);
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    }, ()=>{
      console.log(this.state);
    })
  }

  render() {
    return (
      <Form>
        <FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Username</Label>
          <Input type="email" name="username" onChange = {this.handleInputChange} value = {this.state.username}id="userName" placeholder="username" />
        </FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" onChange = {this.handleInputChange} value = {this.state.email}id="exampleEmail" placeholder="example@mail.com" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">First Name</Label>
          <Input type="name" name="firstName" onChange = {this.handleInputChange}  value = {this.state.firstName} placeholder="First Name" />
          
        </FormGroup>
        <FormGroup>
        <Label for="examplePassword">Last Name</Label>
          <Input type="name" name="lastName"onChange = {this.handleInputChange} value = {this.state.lastName} id="examplePassword" placeholder="First Name" />
          
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Instrument</Label>
          <Input type="select" name="instrument" onChange = {this.handleInputChange} id="exampleSelect">
            <option>{this.state.instrument}</option>
            <option>Flute</option>
            <option>Oboe</option>
            <option>Clarinet</option>
            <option>Saxophone</option>
            <option>Bassoon</option>
            <option>French Horn</option>
            <option>Trumpet</option>
            <option>Trombone</option>
            <option>Euphonium</option>
            <option>Trumpet</option>
            <option>Tuba</option>
            <option>Violin</option>
            <option>Cello</option>
            <option>Viola</option>
            <option>Double Bass</option>
            <option>Guitar</option>
            <option>Harp</option>
            <option>Piano</option>
            <option>Harpsichord</option>
            <option>Organ</option>
            <option>Percussion</option>
            <option>soprano/mezzo</option>
            <option>alto</option>
            <option>tenor</option>
            <option>bass/baritone</option>
           
          </Input>
        </FormGroup>
        
        <FormGroup>
          <Label for="exampleText">Bio</Label>
          <Input type="textarea" name="bio" onChange = {this.handleInputChange} value = {this.state.bio} id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Update Profile Image</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText  color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        {/* <FormGroup tag="fieldset">
          <legend>Basics</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
            Allow Email Updates
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option two can be something else and selecting it will deselect option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled />{' '}
              Option three is disabled
            </Label>
          </FormGroup>
        </FormGroup> */}
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Make Account Private
          </Label>
        </FormGroup>
        <Button onClick = {this.handleFormSubmit}>Submit</Button>
      </Form>
    );
  }
}