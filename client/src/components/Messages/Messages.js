import React from 'react';

export default class MessageBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }

    render(){
    return (
        <div>I am the message board you have arrived</div>
    )
}
}