import React from 'react';
import { Form, Button, Card, Container, } from "react-bootstrap"; 
import AddComment from './AddComment'
import LoadComments from './LoadComments'


// Chat box for stock page
export default function Chat(props)
{
    const { user, stock } = props;
    const stockName = props.stock;

    return(
        <Container>
            <LoadComments stock={ stockName }/>
            <AddComment user={ user }/>
        </Container>
    );

}