import React, {Component} from "react";
import "./UpdateProfile.scss";
import API from "../../utils/API";
import UserCard from "../../components/UserCard"
import TeacherSearch from "../../components/TeacherSearch"
import {Row, Col, Container} from "reactstrap";


class UpdateProfile extends Component{
    constructor(props){
        super(props);
        this.child = React.createRef();
        this.state = {
            loggedIn: false,
            firstName: "",
            lastName: "",
            username: null,
            instrument: "",
            userType: "",
            loading: false,
            startDate: new Date(),
            yearsPlaying: 0,
            age: "",
            workouts: [],
            teacher: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date){
        this.getDAtes();
        console.log(date);
        this.setState({
            starteDate: date
        })
    }
    handleSelect(date){
        console.log( date);
    }


    componentDidMount(){
        API.isLoggedIn().then(user => {
            if(user.data.loggedIn){
                this.setState({
                    loggedIn: true,
                    user: user.data.user._id,
                    username: user.data.user.username
                });
            }
        }).catch(err =>{
            console.log(err);
        })
    }
    changeLoadingStatus(){
        this.setState(prevState =>({
            loading: !prevState.loading
        }))
    }

    loading(){
        setTimeout(()=>{
            this.setState({
                loading: false,
            })
        }, 1000)
    }

 
    handleInputChange = event =>{
        const value = event.target.value;
        const name  = event.target.name;
        this.setState({
            [name]: value
        }, ()=>
        console.log(this.state))
    };

    handleFormSubmit = event => {
        this.changeLoadingStatus();
        
    }

    render (){
        return (
            <>
            <div>I am the update profile page you have arrived</div>
            
            <Row>
              <Container>
                <Col xs = "5">
            <UserCard/>
            </Col>
            </Container> 
            </Row>
            </>
        )
    }


}

export default UpdateProfile;