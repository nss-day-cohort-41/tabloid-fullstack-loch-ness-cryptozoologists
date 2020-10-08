import React from "react";
import { Card, CardBody } from "reactstrap";
import post from "./Post"


const Comment = ({ comment }) => {
    return (
        <Card className="m-4">

            <CardBody>
                <p>
                    <strong>{post.title}</strong>
                </p>
                <p>{comment.subject}</p>
                <p>{comment.content}</p>
                <p>{comment.displayName}</p>
                <p>{comment.createDateTime}</p>

            </CardBody>
        </Card>

    );
};
export default Comment;