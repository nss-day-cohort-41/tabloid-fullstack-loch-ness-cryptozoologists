import React, { useContext, useEffect } from "react";
import { CommentContext } from "../providers/CommentProvider";
import { ListGroup, ListGroupItem } from "reactstrap";
const CommentList = () => {
    const { comments, getAllComments } = useContext(CommentContext);

    useEffect(() => {
        getAllComments();
    }, []);

    return (
        <div>
            <h1>Comments</h1>
            {comments.map((comment) => (

                <div key={comment.id}>
                    <ListGroup>
                        <ListGroupItem>{comment.subject}</ListGroupItem>
                        <p>{comment.content}</p>
                    </ListGroup>

                </div>
            ))}
        </div>
    );
};

export default CommentList;