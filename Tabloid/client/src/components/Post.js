import React from "react";
import { Card, CardImg, CardBody, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
    return (
        <Card className="m-4">
            <p className="text-left px-2">Posted by: {post.userProfile.fullName} ({post.userProfile.userType.name})</p>
            <CardImg top src={post.imageLocation} />
            <CardBody>
                <strong>{post.title}</strong>
                <p> Category: {post.category.name}</p>
                <Link to={`/post/${post.id}`}>
                    <strong>Details</strong>
                </Link>
            </CardBody>
        </Card>
    );
};

export default Post;