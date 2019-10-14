import React from "react";
import "./UserCard.scss";
import API from "../../utils/API"
import {Card, Button, CardBody, CardTitle, CardImg, CardSubtitle, CardText, Container, Row, Col} from "reactstrap";
import UserImage from "../../components/ProfileImage";

function  UserCard (props) {

    return(
        <>

            {props.profilePage === "true" ? (
      <Card className="UserCard">
        <CardImg top width="100%" src="/assets/images/12307424_10206734781501853_2992567671720288241_o.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.username}</CardTitle>
          <CardSubtitle>{props.firstName} {props.lastName}</CardSubtitle>
          <CardText>Teacher: {props.teacher}</CardText>
          <CardText>Instrument: {props.instrument}</CardText>
          <CardText> Birthday: {props.birthday}</CardText>
          <Button>Edit Profile</Button>
        </CardBody>
      </Card>
      ): props.search ? (
          <>

<Row className = "Search">
<Col>
           <UserImage
             type  = "searchIcon"
              image = "assets/images/672.png"
           />
</Col> 

<Col>
            <span className = "StudentName">Name: {props.Name}</span> <br/>
            <span className = "InstrumentText">Instrument: {props.Instrument}</span>
 </Col>
 
 <Col>
            <Button>Profile</Button><Button className = "requestButton">Add Student </Button>

</Col>    

            </Row>
          </>
      ):
          <></>
          
          }
    </>
    )
}

export default UserCard;