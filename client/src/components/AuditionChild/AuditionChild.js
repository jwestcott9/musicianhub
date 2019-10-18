import React from "react";
import {Table,  Button} from 'reactstrap';
import Modal from "../Modal";
function AuditionTable(props){

    return (
        <>
       
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Organization</th>
                    <th>Position</th>
                    <th>Closing Date</th>
                </tr>
            </thead>
            <tbody>
            {props.auditions.map((value, index) => {
                return <tr><td>{index+1}</td><td > {value.title}</td> <td key = {index}><a  href = {value.link}>{value.position}</a></td><Button href ="#" data ={value.date} onClick = {props.launchModal}>{value.date}</Button></tr>
            })}
            </tbody>
        </Table>
        </>
    
    )


}

export default AuditionTable;