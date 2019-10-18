import React, { Component } from 'react';
import API from "../../utils/API";
import AuditionTable from "../AuditionChild";
import "./AuditionsParent.scss";
import Modal from "../Modal";

class UpcomingAuditions extends Component {
 constructor(props){
 super(props);
     this.state = {
        auditionArray : [],
        loading: true
     
 }
}
loading(){
    setTimeout(()=> {
        this.setState({
            loading: false
        })
    }, 1000)  
}
launchModal = event => {
    console.log(event.target.text);
}
toggle = () => setModal(!modal);
componentDidMount(){
    this.loading();
    console.log("componenetDidMount")
    API.getAuditions().then(result => {
      
        this.setState({
            auditionArray: result.data
        }, ()=>{
            console.log(this.state.auditionArray)
        })
    }).catch(err => {
        console.log(err);
    });
}
render(){
    return(
    <>
    <Modal/>
    {!this.state.loading ?
    
        <AuditionTable
        auditions = {this.state.auditionArray}
        launchModal = {this.launchModal}
        />
        :
        <img id="loadingIcon" src="./assets/images/loading.gif" alt="loading"/>
    }
        </>
    )
}

}

export default UpcomingAuditions;