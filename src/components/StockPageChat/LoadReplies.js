import React, { useState, useEffect } from 'react';
import { Form, Card, Container, Nav, NavDropdown } from "react-bootstrap";
import { Grid, Paper, Box, Button, ButtonGroup } from '@material-ui/core';
import { Comment } from 'semantic-ui-react';

export default function LoadReplies(comments) {

    return (
        <div>
            {
                comments.map((reply, key) => {
                    <Card>
                        <Card.Header>
                            {console.log(reply)}
                            test
                        </Card.Header>
                        <Comment key={key}>
                            <Comment.Content>
                            <Grid container direction="column" spacing={1}>
                                <Grid item container direction="row" justify="flex-start" alignItems="center" spacing={1}>
                                    {/* username and timestamp row*/}
                                    <Grid item>
                                        <div>
                                            <Comment.Author as='a'>{reply.uid}</Comment.Author>
                                        </div>
                                    </Grid>
                                    
                                    <Grid item>
                                        <Box fontSize={12} color="text.secondary">
                                            <Comment.Metadata>{reply.timestamp}</Comment.Metadata>
                                        </Box>
                                    </Grid>
                                </Grid>
            
                                <Grid item container direction="row">
                                    {/* Comments contents row */}
                                    <Comment.Text>{reply.text}</Comment.Text>
                                </Grid>
                            </Grid>
                            </Comment.Content>
                        </Comment>
                    </Card>
                    })
            }
        </div>
    );
}

                {/*if (!showReply)
    {
        return (
            <span onClick={setShowReply(true)}>
                show replies
            </span>
        );
    }
    else
    {
        return (
            <div>
            {
            comments.map((reply, key) => {
                if (key > 0)
                {
                    
                }
            })
            }
            </div>
        );
    }*/}

                