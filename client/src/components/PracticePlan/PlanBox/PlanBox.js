import React from "./node_modules/react";
import { Card, Button, CardTitle, CardText, Row, Col } from './node_modules/reactstrap';


function PlanBox (props){


    return(
        <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.description}</CardText>
          <Button onClick = {props.handleRoutineSelect}>Select</Button>
        </Card> 
      </Col>
      </Row>
    )
}

export default PlanBox;