import React, { useState }from 'react';
import { Form, Button, Card } from "react-bootstrap"; 
import {
    createComment,
    addReply,
    userHasUpvoted,
    userHasDownvoted,
    removeUpvote,
    removeDownvote,
} from '../../functions/comments'

// Adding comment section

export default function AddComment(props)
{
    const { user } = props;
    const [loading, setLoading] = useState(false)

    // Change for comment submit
    async function handleSubmit(e) {
        e.preventDefault()
        console.log("Adding the comment, placeholder")
    }

    return(
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