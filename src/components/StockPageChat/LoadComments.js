import React, { useState, useEffect, useRef, createElement } from 'react';
import { Form, Card, Nav, NavDropdown } from "react-bootstrap";
import { Grid, Box, Button } from '@material-ui/core';
import { Comment } from 'semantic-ui-react';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { getUsername } from '../../functions/auth.js';
import AddReply from './AddReply'
import {
  getTickerComments,
  userHasUpvoted,
  userHasDownvoted,
  toggleUpvoteComment,
  toggleDownvoteComment,
} from '../../functions/comments';
import firebase from 'firebase/app';
import 'firebase/firestore';
//import Data from './testComments.json'


/*
Places marked for change:
Change date (2 places)
Change like
Change dislike
Change for reply submitting
*/

// loading existing comment section
export default function LoadComments(props) {
  const [data, setData] = useState([]);
  const stock = props.stock;
  const user = props.user;
  const [limit, setLimit] = useState(3)

  // const [displayComments, setDisplayComments] = useState([]);

  useEffect(async() => {
    const loadComments = await getTickerComments(stock);
    console.log(loadComments);
    setData(loadComments);
  }, []);



  const RenderReply = (thread) => {
    const [showReply, setShowReply] = useState(false)
    const replies = thread.thread.slice(1,thread.thread.length);

    if (showReply)
    {
      return (
        <div>
          {
            replies.map((reply, key) => {
            const date = new Date(reply.timestamp.seconds * 1000);
            const dateStr = date.toLocaleDateString('en') + ' at ' + date.toLocaleTimeString('en');
            
            return (
              <Comment key={key} style={{ marginLeft: 30 }}>
                <Comment.Content>
                  <Grid container direction="column" spacing={1}>
                    <Grid item container direction="row" justify="flex-start" alignItems="center" spacing={1}>
                      {/* username and timestamp row*/}
                      <Grid item>
                        <div>
                          <Comment.Author as='a'>{reply.uid}</Comment.Author>
                        </div>
                      </Grid>

                      {/* Change date here for comment replies*/}
                      <Grid item>
                        <Box fontSize={12} color="text.secondary">
                          <Comment.Metadata>{dateStr}</Comment.Metadata>
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
            })
          }
          <hr />
        </div>
      );
    }

    else
    {
      if ((thread.thread.length - 1) > 0)
      {
        return (
          <center>
            <span onClick={() => setShowReply(true)}>
              show {thread.thread.length - 1} replies
            </span>
            <hr />
          </center>
        )
      }
      else
      {
        return (
          <hr />
        )
      }
    }
  }


  const ChatEntry = (thread) => {
    const topComment = thread.thread[0];
    const date = new Date(topComment.timestamp.seconds * 1000);
    const dateStr = date.toLocaleDateString('en') + ' at ' + date.toLocaleTimeString('en');
    const [inputReply, setInputReply] = useState(false)
    const [action, setAction] = useState(null);
    const [username, setUsername] = useState(topComment.uid);
    const [initialAction, setInitialAction] = useState(null);

    useEffect(async() => {
      const commentName = await getUsername(topComment.uid);
      setUsername(commentName);
      if (userHasUpvoted(user.uid, topComment)) {
        setInitialAction('liked');
        setAction('liked');
      } else if (userHasDownvoted(user.uid, topComment)) {
        setInitialAction('disliked');
        setAction('disliked');
      } else {
        setInitialAction(null);
        setAction(null);
      }
    }, []);

    const like = async() => {
      if (user) {
        await toggleUpvoteComment(user.uid, stock, topComment.id, 0);
        setAction(action === 'liked' ? null : 'liked');
      }
    };

    const dislike = async() => {
      if (user) {
        await toggleDownvoteComment(user.uid, stock, topComment.id, 0);
        setAction(action === 'disliked' ? null : 'disliked');
      }
    };

    return (
      <Comment>
        <Comment.Content>
          <Grid container direction="column" spacing={1}>
            <Grid item container direction="row" justify="flex-start" alignItems="center" spacing={1}>
              {/* username and timestamp row*/}
              <Grid item>
                <div>
                  <Comment.Author as='a' onClick={() => window.location.href = '/comments?' + topComment.uid}>
                    {username}
                  </Comment.Author>
                </div>
              </Grid>
              {/* Change date here for top comment*/}
              <Grid item>
                <Box fontSize={12} color="text.secondary">
                  <Comment.Metadata>{dateStr}</Comment.Metadata>
                </Box>
              </Grid>
            </Grid>

            <Grid item container direction="row">
              {/* Comments contents row */}
              <Comment.Text>{topComment.text}</Comment.Text>
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

                    {/* Change upvote counts here */}
                    <Grid item>
                      <span>
                        {initialAction === 'liked' && action !== 'liked' ?
                          topComment.upvotes.length - 1
                        : initialAction !== 'liked' && action === 'liked' ?
                          topComment.upvotes.length + 1
                        : topComment.upvotes.length}
                      </span>
                    </Grid>

                    <Grid item>
                      <span onClick={dislike}>
                        {createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                      </span>
                    </Grid>

                    <Grid item>
                      <span>
                        {initialAction === 'disliked' && action !== 'disliked' ?
                          topComment.downvotes.length - 1
                        : initialAction !== 'disliked' && action === 'disliked' ?
                          topComment.downvotes.length + 1
                        : topComment.downvotes.length}
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
                (<AddReply uid={user.uid} stock={stock}/>)
              }
            </Grid>
          </Grid>
        </Comment.Content>
      </Comment>
    )
  }

  return (
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
      {data.length - 1 > 0 ?
          <>
            {data.slice(0, limit).map((thread, key) => {
              return (
                <div key={key}>
                  <ChatEntry key={thread} thread={thread} />
                  <RenderReply thread={thread}/>
                  {/* {RenderComment(surfaceCommentArray)} */}
                </div>
              )
            })}
          </>
          : <center><p>No comments yet!</p></center>
        }
        {limit < data.length &&
            <center>
              <Button onClick={() => setLimit(((limit + 5) < data.length) ? (limit + 5) : data.length )}>
                Show more
              </Button>
            </center>
        }
      </div>
    </>
  );
}