import React, { useContext, useEffect } from "react";
import { CommentContext } from "../providers/CommentProvider";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useParams } from "react-router-dom";

const CommentList = () => {
    const { comments, getComments } = useContext(CommentContext);
    const { id } = useParams();

    useEffect(() => {
        getComments(id).then(getComments);
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