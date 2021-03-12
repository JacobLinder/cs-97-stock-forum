import React, { useState, useEffect } from 'react';
import { Form, Card } from "react-bootstrap";
import {  Button } from '@material-ui/core';
import { addReply } from '../../functions/comments';
// import {
//   createComment,
//   addReply,
//   userHasUpvoted,
//   userHasDownvoted,
//   removeUpvote,
//   removeDownvote,
// } from '../../functions/comments'

// Adding comment section

export default function AddReply(props) {
  const uid = props.uid;
  const stock = props.stock;
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [replied, setReplied] = useState(false);

  // Change for comment submit
  async function handleReplySubmit(e) {
    e.preventDefault();
    setLoading(true);
    await addReply(stock, "IzlviiBHzydpeCezXbQ8", uid, text);
    setReplied(true);
    setLoading(false);
  }
  if (replied)
  {
    return (
        <>
        {console.log("reply added")}
        </>
    )
  }
  else
  {
    return (
        <Card>
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
                    onChange={(e) => setText(e.target.value)}
                />
                </Form.Group>
                <Button size="small" disabled={loading} type="submit">
                Add reply
                </Button>
            </Form>
            </Card.Body>
        </Card>
      );
  }
}