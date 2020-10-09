import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Badge } from 'reactstrap';
import { Link } from "react-router-dom";

const Post = ({ post }) => {
    return (
        <Card className="my-2">
            <CardBody>
                <CardTitle><h5>{post.title}</h5></CardTitle>
                <CardImg top className="rounded-0 mb-3" src={post.imageLocation} />
                <CardText className="mb-0">Posted by: {post.userProfile.fullName} - <em>{post.userProfile.userType.name}</em></CardText>
                <Badge variant="info" pill>{post.category.name}</Badge>
                {/* <CardText>Category: {post.category.name}</CardText> */}
                <div className="mt-3">
                    <Link to={`/postForm/${post.id}`} className="btn btn-sm btn-secondary btn-info" title="Details">
                       Edit
                    </Link>
                </div>
            </CardBody>
        </Card>
    );
};

export default Post;
