import React from "react";
import {Table} from 'reactstrap';

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
                return <tr><td>{index}</td><td key ={index}> {value.title}</td> <td key = {index}><a href = {value.link}>{value.position}</a></td><td>{value.date}</td></tr>
            })}
            </tbody>
        </Table>
        </>
    
    )


}

export default AuditionTable;