import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
// import axios from "axios";
import Table from "../../components/Table";
import googleCalendarPlugin from "@fullcalendar/google-calendar";




import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import "./styles.scss";

// must manually import the stylesheets for each plugin
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import bootstrapPlugin from '@fullcalendar/bootstrap'

class studentCalendar extends Component {
calendarComponentRef = React.createRef();
constructor(props){
    super(props);
    this.state ={
        modal: false,
        modal2: false,
        content: null,
        calendarWeekends: true,
        listening: [],
        calendarEvents: [
            // initial events if needed
        ],
        workoutHeader1: "",
        workoutBody1: "",
        view: "dayGridWeek"

    };
    this.toggle = this.toggle.bind(this);

}

toggle(){
    console.log(this.state)
    if(this.state.modal){
        this.setState({
            content:this.state.content, 
            modal: true
        })
    };
}
toggle3 = ()=>{
    console.log(this)
    this.setState({
        modal2: false
    })
}

render(){
    return (
        <div className = "calendar">

            {!this.state.loading ?
            <div className= "calendar-student">
                <FullCalendar
                className = "calendar"
                defaultView = {this.state.view}
                header= {{
                    left: "prev, next today",
                    center: "title",
                    right: "dayGridMonth, dayGridWeek, timeGridDay, listWeek "
                }}
                plugins = {[dayGridPlugin, timeGridPlugin, interactionPlugin, bootstrapPlugin, googleCalendarPlugin]}
                googleCalendarApiKey= 'AIzaSyBdmYDIz9IbdGv_a0GsknXcQmasrx4x6OQ'
                ref = {this.calendarComponentRef}
                weekends = {this.state.calendarWeekends}
                editable= "true"
                events = {
                    [this.state.calendarWeekends, {googleCalendarId: "jwestcott9@gmail.com"}]
                    }
                    
                dateClick = {this.handleDateClick}
                themeSystem = "bootstrap3"
                selectable = "true"
                eventClick = {this.eventClick}
                eventColor = "grey"
                eventTextColor="white"
                Integer = '9000000'

                />
                </div>: <div></div>
            }
        <div>

        <Modal 
        isOpen ={this.state.modal} 
        toggle ={this.toggle} 
        dialogClassName = "mdaol-90w"
        size="lg">
            <ModalHeader 
            toggle = {this.toggle}>
                Daily Excersize 
            </ModalHeader>
            <ModalBody>
                
            </ModalBody>
        </Modal>

        <Modal 
        isOpen = {this.state.modal2}
        toggle = {this.toggle2}
        dialogClassName = "modal-90w"
        size = "lg">
            <ModalHeader 
            toggle ={this.toggle2}>
                Listening Description
            </ModalHeader>

            <ModalBody>
                <tbody>
                    <Table/>
                </tbody>
            </ModalBody>
        </Modal>

        </div>
        </div>
    );
}


toggleWeekends = () => {
    this.setState({
      // update a property
      calendarWeekends: !this.state.calendarWeekends
    });
  };
 
  gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current.getApi();
    calendarApi.gotoDate("2000-01-01"); // call a method on the Calendar object
};

eventClick = (info)=>{

}
/* WRITE SOME CODE THAT WILL ORGANIZE THE DATA THAT IS 
POPULATED ONTO THE MODAL */
// renderList = (data)=>{
//     let counter = 0;
//     data.forEach((element)=>{
//     counter++;
//     console.log(counter);
//     let name = element.name
//     let amount;
//     if(element.reps){
//         amount= element.reps
//     }
//     if(element.time){
//         amount = element.time
//     }
//     if(counter ===1){
//         this.setState ){

//         }
//     }
//     }
//     )
// }

handleDateClick = arg => {
    console.log( arg.date);
      this.setState({
        // add new event data
        calendarEvents: this.state.calendarEvents.concat({
          // creates a new array
          title: "New Event",
          start: arg.date,
          allDay: arg.allDay
        })
      });
    
  }


}


export default studentCalendar;