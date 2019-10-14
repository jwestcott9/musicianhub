import React from 'react';
import UserCard from "../../components/UserCard"
import {Container} from "reactstrap";
import "./Messages.scss"



export default class MessageBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }

    render(){
    return (
        <>
       <input className= "searchBar" placeholder = "search"></input>
        <Container >
        
        <UserCard 
        search = "true"
        Instrument = "Cello"
        Name = "Jeff"/>
        
        </Container>
     </>   
    )
}
}