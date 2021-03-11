import React, { useState, useEffect } from 'react';
import { Form, Card, Container, Nav, NavDropdown } from "react-bootstrap";
import { Grid, Paper, Box, Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Comment, Avatar, Input, CommentAction} from 'semantic-ui-react';
import { 
    getTickerComments,
    getUserComments,
} from '../../functions/comments';
import firebase from 'firebase/app';
import 'firebase/firestore';

import Data from './testComments.json'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

// loading existing comment section
export default function LoadComments(props) {

    const [comments, setComments] = useState([]);
    // const [displayComments, setDisplayComments] = useState([]);

    // useEffect(async() => {
    //     const loadComments = await getTickerComments(props.stock);
    //     const loadDisplay = [];
    //     loadComments.forEach((comment) => loadDisplay.push(comment.slice(0, 1)));
    //     setComments(loadComments);
    //     setDisplayComments(loadDisplay);
    // });

    const { stock } = props;
    const classes = useStyles();
    const [inputReply, setInputReply] = useState(false)
    const [replyAdding, setReplyAdding] = useState(false)


    async function handleReplySubmit(e) {
        e.preventDefault()
        console.log("Submitting comment placeholder")
    }

    return(
        <>
            <Nav variant="pills" activeKey="1">
                <h2>
                Comments for {props.stock}
                </h2>
                <NavDropdown
                    title="Sort by"
                    id="nav-dropdown"
                    className="ml-auto"
                >
                    <NavDropdown.Item>Recent</NavDropdown.Item>
                    <NavDropdown.Item>Upvotes</NavDropdown.Item>
                    <NavDropdown.Item>Controversial</NavDropdown.Item>
                    <NavDropdown.Item>Hot</NavDropdown.Item>
                </NavDropdown>
                
                
            </Nav>
            <hr />

            <div className={classes.root}>
            {
            Data.map((comment, key) => {
                return (
                <Comment key={key}>
                    <Comment.Content>
                        <Grid container direction="column" spacing={1}>
                            <Grid item container direction="row" justify="flex-start" alignItems="center" spacing={1}>
                                {/* username and timestamp row*/}
                                <Grid item>
                                    <div>
                                        <Comment.Author as='a'> {comment.uid} </Comment.Author>
                                    </div>
                                </Grid>
                                
                                <Grid item>
                                    <Box fontSize={12} color="text.secondary">
                                        <Comment.Metadata> {comment.timestamp} </Comment.Metadata>
                                    </Box>
                                </Grid>
                            </Grid>

                            <Grid item container direction="row">
                                {/* Comments contents row */}
                                <Comment.Text> {comment.text} </Comment.Text>
                            </Grid>
                            
                            <Grid item>
                                {/* comment action row */}
                                <Box fontSize={10}>
                                    <Comment.Actions>
                                        <Grid container direction="row" spacing={1}>
                                            <Grid item>
                                                <Comment.Action>
                                                    <span onClick={() => setInputReply(inputReply ? false : true)}>
                                                        Reply
                                                    </span>
                                                </Comment.Action>
                                                
                                            </Grid>

                                            <Grid item>
                                                <Comment.Action>Upvote</Comment.Action>
                                            </Grid>

                                            <Grid item>
                                                <Comment.Action>Downvote</Comment.Action>
                                            </Grid>
                                        </Grid>
                                    </Comment.Actions>
                                </Box>
                            </Grid>

                            <Grid item>
                                {inputReply && 
                                (<Card>
                                    <Card.Header>
                                        Add a reply
                                    </Card.Header>
                                    <Card.Body>
                                        <Form onSubmit={handleReplySubmit}>
                                            <Form.Group id="reply">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Add your reply here"
                                                    as="textarea" rows={2}
                                                />
                                            </Form.Group>
                                            <Button size="small" disabled={replyAdding} type="submit">
                                                Add reply
                                            </Button>
                                        </Form>
                                    </Card.Body>
                                </Card>)
                                }
                            </Grid>
                        </Grid>
                    </Comment.Content>
                    <hr />
                </Comment>
                )
                
            })
            }                
            </div>
        </>
    );
}