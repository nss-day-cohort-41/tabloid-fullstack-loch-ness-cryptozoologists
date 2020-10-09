import React from "react";
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Badge } from 'reactstrap';
import { Link } from "react-router-dom";

const Post = ({ post }) => {
    return (
        <Card className="my-2">
            <CardBody>
                <CardTitle><h5>{post.title}</h5></CardTitle>
                <CardImg top className="rounded-0 mb-3" src={post.imageLocation} />
                <CardText>Posted by: {post.userProfile.fullName} - <em>{post.userProfile.userType.name}</em></CardText>
                <Badge variant="info" pill>{post.category.name}</Badge>
                {/* <CardText>Category: {post.category.name}</CardText> */}
            </CardBody>
        </Card>
    );
};

export default Post;
