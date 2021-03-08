import React, { useState }from 'react';
import { Form, Card, Container, Nav, NavDropdown } from "react-bootstrap";
import { Grid, Paper, Box, Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Comment, Avatar, Input, CommentAction} from 'semantic-ui-react';
import { 
    getTickerComments,
    getUserComments,
} from '../../functions/comments';

import Data from './testComments.json';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
    },
    paper2: {
        padding: theme.spacing(2),
        textAlign: 'left',
    },
}));

// loading existing comment section
export default function LoadComments(props)
{
    const { stock } = props;
    const comments = getTickerComments(props.stock);
    const classes = useStyles();
    console.log(comments);

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
                                <Box height="100%">
                                    <Comment.Content>
                                        <Grid container direction="column">
                                            {/* username and timestamp row*/}
                                            <Grid container direction="row" justify="flex-start" alignItems="flex-end">
                                                <Grid item xs={1}>
                                                    <Comment.Author as='a'> {comment.uid} </Comment.Author>
                                                </Grid>
                                                <Grid item xs>
                                                    <Box color="text.secondary" fontSize={12}>
                                                        <Comment.Metadata> {comment.timestamp} </Comment.Metadata>
                                                    </Box>
                                                </Grid>
                                            </Grid>

                                            {/* Comments contents row */}
                                            <Grid container justify="flex-start">
                                                <Grid item md={8}>
                                                    <Box height="100%">
                                                        <Comment.Text> {comment.text} </Comment.Text>
                                                    </Box>
                                                </Grid>
                                            </Grid>

                                            {/* comment action row */}
                                            <Grid container direction="row" justify="flex-start">
                                                <Comment.Actions>
                                                    <Box color="text.secondary" fontSize={12}>
                                                        <Comment.Action>Reply</Comment.Action>
                                                        <Comment.Action>Upvote</Comment.Action>
                                                        <Comment.Action>Downvote</Comment.Action>
                                                    </Box>
                                                </Comment.Actions>
                                            </Grid>
                                        </Grid>
                                    </Comment.Content>
                                </Box>
                                <hr />
                            </Comment>
                        )
                    })
                }                
            </div>
        </>
    );
}

