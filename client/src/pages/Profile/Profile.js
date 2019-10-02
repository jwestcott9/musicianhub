import React, {Component} from "react";
import "./Profile.scss";
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom"
import API from "../../utils/API"
import Calendar from "../../components/Calendar"
import PracticeBreakdown from  "../../components/PracticeBreakdown"


class Profile extends Component {
    state = {
        loggedIn: false,
        user: null,
        loading: true,
        
    }

    componentDidMount() {

        this.loading();

        API.isLoggedIn().then(user => {
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true,
                    user: user.data.user
                });
            }
        }).catch(err => {
            console.log(err);
        });

        console.log(this.props)
    }

    loading() {
        setTimeout(()=> {
            this.setState({
                loading: false
            })
        }, 1000)  
    }

    render() {
        return (
            <div className="profilePage">   
                <Row>
                    <Col sm ="1"></Col>
                    <Col sm = "5">
                       <PracticeBreakdown/>
                    </Col>
                    <Col sm = "6">
            <Calendar className= "calendar"/>
            </Col>
            </Row>
                {this.state.loggedIn ? (
                    <div className="profileBox">
                        <h1 id="userTitle">Welcome {this.state.user.username}</h1>
                    </div>
                ) : (
                    <div className="noUser">
                        {!this.state.loading ? (
                            <>
                                <h1>please log in</h1>
                                <Link className="loginLink" to="/login"><Button className="loginBtn" color="info" block>Login</Button></Link>
                            </>
                        ) : (
                            <img id="loadingIcon" src="./assets/images/loading.gif" alt="loading"/>
                        )}
                    </div> 
                )}
            </div>
        )
    }
}


export default Profile;