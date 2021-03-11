import React, { useState, useEffect, createElement } from 'react';
import { Form, Card, Container, Nav, NavDropdown } from "react-bootstrap";
import { Grid, Paper, Box, Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Comment, Avatar, Input, CommentAction} from 'semantic-ui-react';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
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
    const [replyAdding, setReplyAdding] = useState(false)


    async function handleReplySubmit(e) {
        e.preventDefault()
        console.log("Submitting comment placeholder")
        setReplyAdding(false)
    }


    function RenderSurfaceComment(surfaceComment) {
        const [inputReply, setInputReply] = useState(false)
        const [action, setAction] = useState(null);

        const like = () => {
            setAction(action === 'liked' ? null : 'liked');
        };

        const dislike = () => {
            setAction(action === 'disliked' ? null : 'disliked');
        };

        return (
            <Comment>
                <Comment.Content>
                <Grid container direction="column" spacing={1}>
                    <Grid item container direction="row" justify="flex-start" alignItems="center" spacing={1}>
                        {/* username and timestamp row*/}
                        <Grid item>
                            <div>
                                <Comment.Author as='a'>{surfaceComment[0].uid}</Comment.Author>
                            </div>
                        </Grid>
                    
                        <Grid item>
                            <Box fontSize={12} color="text.secondary">
                                <Comment.Metadata>{surfaceComment[0].timestamp}</Comment.Metadata>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid item container direction="row">
                        {/* Comments contents row */}
                        <Comment.Text>{surfaceComment[0].text}</Comment.Text>
                    </Grid>
                
                    <Grid item>
                        {/* comment action row */}
                        <Box fontSize={10}>
                            <Comment.Actions>
                                <Grid container direction="row" alignItems="flex-start" spacing={1}>
                                    <Grid item>
                                        <span onClick={like}>
                                            {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
                                        </span>
                                    </Grid>

                                    <Grid item>
                                        <span>
                                            {surfaceComment[0].upvotes.length}
                                        </span>
                                    </Grid>

                                    <Grid item>
                                        <span onClick={dislike}>
                                            {createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                                        </span>
                                    </Grid>

                                    <Grid item>
                                        <span>
                                            {surfaceComment[0].downvotes.length}
                                        </span>
                                    </Grid>

                                    <Grid item>
                                        <Comment.Action>
                                            <span onClick={() => setInputReply(inputReply ? false : true)}>
                                                Reply
                                            </span>
                                        </Comment.Action>
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
            </Comment>
        )
    }
    

    function renderReply(reply) {
        return (
            <div>
            {
            reply.map((reply, key) => {
                if (key > 0)
                {
                    return (
                        <Comment key={key} style={{marginLeft: 20}}>
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
                    );
                }
            })
            }
            </div>
        );
    }


    function RenderComment(surfaceCommentArray) {
        const [showReply, setShowReply] = useState(false)

        return (
            <div>
                {RenderSurfaceComment(surfaceCommentArray)}
                <div>
                    {showReply &&
                    (
                        <div>
                            {renderReply(surfaceCommentArray)}
                        </div>
                    )
                    }
                </div>
                <div>
                    {!showReply &&
                    (
                        <Grid container item justify="center">
                            <span onClick={() => setShowReply(true)}>
                                Show  replies
                            </span>
                        </Grid>
                    )
                    }
                </div>
                <hr />
            </div>
        )
    }
// return (
//     <Comment key={key}>
//         {console.log("key is " + key)}
//         <Comment.Content>
//         <Grid container direction="column" spacing={1}>
//             <Grid item container direction="row" justify="flex-start" alignItems="center" spacing={1}>
//                 {/* username and timestamp row*/}
//                 <Grid item>
//                     <div>
//                         <Comment.Author as='a'>{array.uid}</Comment.Author>
//                     </div>
//                 </Grid>
            
//                 <Grid item>
//                     <Box fontSize={12} color="text.secondary">
//                         <Comment.Metadata>{array.timestamp}</Comment.Metadata>
//                     </Box>
//                 </Grid>
//             </Grid>

//             <Grid item container direction="row">
//                 {/* Comments contents row */}
//                 <Comment.Text>{array.text}</Comment.Text>
//             </Grid>
        
//             <Grid item>
//                 {/* comment action row */}
//                 <Box fontSize={10}>
//                     <Comment.Actions>
//                         <Grid container direction="row" spacing={1}>
//                             <Grid item>
//                                 <Comment.Action>
//                                     <span onClick={() => setInputReply(inputReply ? false : true)}>
//                                         Reply
//                                     </span>
//                                 </Comment.Action>
//                             </Grid>

//                             <Grid item>
//                                 <Comment.Action>Upvote</Comment.Action>
//                             </Grid>

//                             <Grid item>
//                                 <Comment.Action>Downvote</Comment.Action>
//                             </Grid>
//                         </Grid>
//                     </Comment.Actions>
//                 </Box>
//             </Grid>
//             <Grid item>
//                 {inputReply && 
//                 (<Card>
//                     <Card.Header>
//                         Add a reply
//                     </Card.Header>
//                     <Card.Body>
//                         <Form onSubmit={handleReplySubmit}>
//                             <Form.Group id="reply">
//                                 <Form.Control
//                                     type="text"
//                                     placeholder="Add your reply here"
//                                     as="textarea" rows={2}
//                                 />
//                             </Form.Group>
//                             <Button size="small" disabled={replyAdding} type="submit">
//                                 Add reply
//                             </Button>
//                         </Form>
//                     </Card.Body>
//                 </Card>)
//                 }
//             </Grid>
//         </Grid>
//     </Comment.Content>
//     <hr />
//     </Comment>
// )

    return(
        <>
            <Nav variant="pills">
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

            <div>
            {
            Data.map((surfaceCommentArray, key) => {
                return (
                    <div key={key}>
                        {RenderComment(surfaceCommentArray)}
                    </div>
                )})
            }
            </div>
        </>
    );
}