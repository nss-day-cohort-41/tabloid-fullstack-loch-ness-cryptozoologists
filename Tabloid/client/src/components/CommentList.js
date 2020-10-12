import React, { useContext, useEffect } from "react";
import { CommentContext } from "../providers/CommentProvider";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useParams, Link } from "react-router-dom";

const CommentList = () => {
    const { comments, getComments } = useContext(CommentContext);
    const { id } = useParams();

    useEffect(() => {
        getComments(id);
    }, []);
    console.log(id);
    return (
        <div>
            <h1>Comments</h1>
            {comments.map((comment) => (

                <div key={comment.postId}>
                    <ListGroup>
                        <ListGroupItem>
                            <p>{comment.subject}</p>
                            <p>{comment.content}</p>
                            <p>{comment.createDateTime}</p>
                            <p>{comment.userProfileId}</p>
                        </ListGroupItem>

                    </ListGroup>
                </div>
            ))}
            <Link to={`/post/`}>Back to Posts</Link>
        </div>
    );
};

export default CommentList;