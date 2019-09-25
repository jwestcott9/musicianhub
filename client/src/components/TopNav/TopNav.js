import React, { Component } from "react";
import "./TopNav.scss";
import API from "../../utils/API";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

import ProfileImage from "../ProfileImage"


export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            loggedIn: false
        };
    }

    componentDidMount() {
        API.isLoggedIn().then(user => {
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true
                });
            }
        }).catch(err => {
            console.log(err);
        });
    }

    logout() {
        API.logout().then((data)=> {
            window.location.pathname = "/"
        }).catch((err)=> {
            console.log(err)
        })
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar className="navbar" light expand="md">
                    <NavbarBrand href="/" className="titleFont"><i className="fas fa-music"></i> Musician Hub</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/"><i className="fas fa-home light-text"></i></NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                            {!this.state.loggedIn ? (
                                <DropdownToggle nav caret>
                                <ProfileImage 
                                image = "./assets/images/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                                type = "icon"/>
                                </DropdownToggle>
                            ):
                            <DropdownToggle nav caret>
                                <ProfileImage 
                                image = "./assets/images/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                                type = "icon"/>
                                </DropdownToggle>
                            }
                                
                                <DropdownMenu right>
                                    {this.state.loggedIn ? (
                                        <>
                                            <DropdownItem>
                                                <NavLink href="/profile">Profile</NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink onClick={this.logout}>Logout</NavLink>
                                            </DropdownItem>
                                        </>
                                    ) : (
                                        <>
                                            <DropdownItem>
                                                <NavLink href="/login">login</NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink href="/signup">signup</NavLink>
                                            </DropdownItem>
                                        </>
                                    )}
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}