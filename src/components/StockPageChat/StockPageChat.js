import React, { useState } from 'react';
import { Card, Container } from "react-bootstrap"; 
import { Button } from '@material-ui/core';
import AddComment from './AddComment'
import LoadComments from './LoadComments'


// Chat box for stock page
export default function Chat(props)
{
    const user = props.user;
    const stock = props.stock;
    const stockName = props.stock;
    const [addComment, setAddComment] = useState(false)

    return(
        <Container>
            <LoadComments stock={ stockName } user={ user } />
            <center>
            {
                addComment ?
                (<AddComment stock={ stockName } user={ user }/>) :
                (
                  <Button onClick={() => setAddComment(addComment ? false : true)}>
                    Add a comment
                  </Button>
                )
            }
            </center>
        </Container>
    );

}