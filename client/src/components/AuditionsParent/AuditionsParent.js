import React, { Component } from 'react';
import API from "../../utils/API";
import AuditionTable from "../AuditionChild";
import "./AuditionsParent.scss"

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
    {!this.state.loading ?
    
        <AuditionTable
        auditions = {this.state.auditionArray}
        />
        :
        <img id="loadingIcon" src="./assets/images/loading.gif" alt="loading"/>
    }
        </>
    )
}

}

export default UpcomingAuditions;