import React from "react";
import "./UserCard.scss";
import API from "../../utils/API"
import {Card, Button, CardBody, CardTitle, CardImg, CardSubtitle, CardText, Container, Row, Col} from "reactstrap";


function UserCard (props) {

    return(
        <div>

            
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
    </div>
    )
}

export default UserCard;