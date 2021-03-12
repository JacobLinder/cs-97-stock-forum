import React, { useState } from 'react';
import { Form, Button, Card } from "react-bootstrap";
import { createComment } from '../../functions/comments';
// import {
//   createComment,
//   addReply,
//   userHasUpvoted,
//   userHasDownvoted,
//   removeUpvote,
//   removeDownvote,
// } from '../../functions/comments'

// Adding comment section

export default function AddComment(props) {
  const uid = props.user.uid;
  const stock = props.stock;
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");

  // Change for comment submit
  async function handleSubmit(e) {
    e.preventDefault();
    await createComment(stock, uid, text);
    console.log(stock, uid, text)
  }

  return (
    <Card>
      <Card.Header>
        Add a comment
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group id="comment">
            <Form.Control
              type="text"
              placeholder="Add your comment here"
              as="textarea" rows={3}
              onChange={(e) => setText(e.target.value)}
            />
          </Form.Group>
          <Button disabled={loading} type="submit">
            Add a comment
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}