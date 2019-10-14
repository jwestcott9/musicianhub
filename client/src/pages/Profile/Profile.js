import React, {Component} from "react";
import "./Profile.scss";
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom"
import API from "../../utils/API"
import Calendar from "../../components/Calendar"
import PracticeBreakdown from  "../../components/PracticeBreakdown"
import TabBar from  "../../components/tabBar";
import UserCard from "../../components/UserCard";
import UpcomingAuditions from "../../components/AuditionsParent";
import UpdateProfile from "../../components/UpdateProfile";
import Messages from "../../components/Messages";
import { throws } from "assert";


class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
            user: null,
            loading: true,
            display: "",
            auditions: [],
            
        }
        this.renderCalendar = this.renderCalendar.bind(this);
        this.renderMessages = this.renderMessages.bind(this);
        this.renderUpcomingAuditions = this.renderUpcomingAuditions.bind(this);
        this.renderUpdateProfile = this.renderUpdateProfile.bind(this);
        this.renderBreakdown = this.renderBreakdown.bind(this);
    
    }
    
    componentDidMount() {
        
        this.loading();
        
        API.isLoggedIn().then(user => {
            console.log(user.data);
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true,
                    user: user.data.user
                }, ()=>{
                    console.log(this.state.user)
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

    renderCalendar(){
        this.setState({
            display: "calendar"
        })
    }

    renderMessages (){
        this.setState({
            display: "Messages"
        })
    }

    renderUpcomingAuditions(){
        this.setState({
            display: "UpcomingAuditions"
        })
    }

    renderBreakdown (){
        this.setState ({
            display:"Breakdown"
        })
    }
    renderUpdateProfile(){
        this.setState({
            display: "UpdateProfile"
        })
    }

    render() {
        return (
           <>
        
           
                {this.state.loggedIn ? (

                   <>
                   {this.state.user.userType === "Teacher" ?(

<>
                       <div>This is a teacher profile</div>

                       <Row>
               <Col xs = "3">
           <UserCard
           profilePage = "true" />
           </Col>
           <Col > 
            <div className="profilePage"> 
          
            <TabBar
            renderCalendar = {this.renderCalendar}
            renderBreakdown = {this.renderBreakdown}
            renderMessages = {this.renderMessages}
            renderUpcomingAuditions = {this.renderUpcomingAuditions}
            renderUpdateProfile = {this.renderUpdateProfile}/>
                <Row>
                  
            {  
                    this.state.display === "calendar" ? (
                <Calendar className= "calendar"/>
            )   :   this.state.display === "Breakdown" ?    (
                <PracticeBreakdown/>
            )   :   this.state.display  === "Messages" ?    (
                <Messages
                />
            )   :   this.state.display === "UpcomingAuditions" ?    (
                <UpcomingAuditions/>
            )   :
                <UpdateProfile
                
                loggedIn = {this.state.loggedIn}
                user = {this.state.user}
                />  
            }
            
            </Row>

                            
                              
                                </div>
            </Col>
            </Row>
                       </>
                   ):
                   (<>
                       <div>this is a student profile</div>
                       <Row>
               <Col xs = "3">
           <UserCard
           profilePage = "true"/>
           </Col>
           <Col > 
            <div className="profilePage"> 
          
            <TabBar
            renderCalendar = {this.renderCalendar}
            renderBreakdown = {this.renderBreakdown}
            renderMessages = {this.renderMessages}
            renderUpcomingAuditions = {this.renderUpcomingAuditions}
            renderUpdateProfile = {this.renderUpdateProfile}/>
                <Row>
                  
            {  
                    this.state.display === "calendar" ? (
                <Calendar className= "calendar"/>
            )   :   this.state.display === "Breakdown" ?    (
                <PracticeBreakdown/>
            )   :   this.state.display  === "Messages" ?    (
                <Messages
                />
            )   :   this.state.display === "UpcomingAuditions" ?    (
                <UpcomingAuditions/>
            )   :
                <UpdateProfile
                loggedIn = {this.state.loggedIn}
                user = {this.state.user}
                />  
            }
            
            </Row>

                                </div>
            </Col>
            </Row>
                       </>
                   ) }
                    <div className="profileBox">
                        <h1 id="userTitle">Welcome {this.state.user.username} {this.state.user.userType}</h1>
                    </div>
                    </>
                ) : (
                    <div className="noUser">
                        {!this.state.loading ? (
                            <>
                            <Row>
               <Col xs = "3">
           <UserCard
           profilePage = "true"/>
           </Col>
           <Col > 
            <div className="profilePage"> 
          
            <TabBar
            renderCalendar = {this.renderCalendar}
            renderBreakdown = {this.renderBreakdown}
            renderMessages = {this.renderMessages}
            renderUpcomingAuditions = {this.renderUpcomingAuditions}
            renderUpdateProfile = {this.renderUpdateProfile}/>
                <Row>
                  
            {  
                    this.state.display === "calendar" ? (
                <Calendar className= "calendar"/>
            )   :   this.state.display === "Breakdown" ?    (
                <PracticeBreakdown/>
            )   :   this.state.display  === "Messages" ?    (
                <Messages
                
                />
            )   :   this.state.display === "UpcomingAuditions" ?    (
                <UpcomingAuditions/>
            )   :
                <UpdateProfile
                loggedIn = {this.state.loggedIn}
                user = {this.state.user}
                />  
            }
            
            </Row>

                            
                                <h1>please log in</h1>
                                <Link className="loginLink" to="/login"><Button className="loginBtn" color="info" block>Login</Button></Link>
                           
                                </div>
            </Col>
            </Row>
                            </>
                        ) : (
                            <img id="loadingIcon" src="./assets/images/loading.gif" alt="loading"/>
                        )}
                    </div> 
                )}
           
            </>
        )
    }
 
}


export default Profile;