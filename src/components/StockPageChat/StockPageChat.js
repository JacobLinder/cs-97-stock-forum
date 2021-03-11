import React, { useState } from 'react';
import { Card, Container } from "react-bootstrap"; 
import { Button, Grid } from '@material-ui/core';
import AddComment from './AddComment'
import LoadComments from './LoadComments'


// Chat box for stock page
export default function Chat(props)
{
    const { user, stock } = props;
    const stockName = props.stock;
    const [addComment, setAddComment] = useState(false)

    return(
        <Container>
            <LoadComments stock={ stockName }/>
            <Card>
            {
                addComment ?
                (<AddComment user={ user }/>) :
                (
                <Button onClick={() => setAddComment(addComment ? false : true)}>
                    Add a comment
                </Button>
                )
            }
            </Card>
        </Container>
    );

}