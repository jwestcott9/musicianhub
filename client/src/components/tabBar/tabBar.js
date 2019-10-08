import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, Row, Col } from 'reactstrap';
import "./style.scss"


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      calendar: false,
      breakdown: false,
      messages: false,
      upcomingAuditions: false,
      profile: false
    };
  }




  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


  render() {
    return (
      <div>
         
        <Nav tabs>
    
          <NavItem className = "navItem">
            <NavLink href="#"  onClick = {this.props.renderCalendar} value = "calendar" active = {this.state.active}>Calendar</NavLink>
          </NavItem>
          
          <NavItem className = "navItem">
            <NavLink onClick= {this.props.renderBreakdown} href="#" >Breakdown</NavLink>
          </NavItem>
         
        
          
         
          <NavItem className = "navItem">
            <NavLink onClick= {this.props.renderMessages} href="#">Messages</NavLink>
          </NavItem>

          

         
          <NavItem className = "navItem">
            <NavLink onClick= {this.props.renderUpcomingAuditions}  href="#">Upcoming Auditions</NavLink>
          </NavItem>

          
         
          <NavItem className = "navItem">
            <NavLink onClick= {this.props.renderUpdateProfile}  href="#">Profile</NavLink>
          </NavItem>
          
            
        </Nav>
      </div>
    );
  }
}

