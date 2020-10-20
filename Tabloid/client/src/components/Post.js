import React, { useEffect, useContext, useState } from "react";
import { PostContext } from "../providers/PostProvider";
import { Card, CardImg, CardBody, CardTitle, CardText, Badge, Button } from 'reactstrap';
import { Link, useParams } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";

const Post = ({ post }) => {

    const { posts, getAllPosts } = useContext(PostContext);
    const { userProfiles, listAllUserProfiles } = useContext(UserProfileContext);

    useEffect(() => {
        getAllPosts();
    }, []);

    return (
    <>
        <Card className="my-2">
            <CardBody>
                <CardTitle><h4>{post.title}</h4></CardTitle>
                <CardImg top className="rounded-0 mb-3" src={post.imageLocation} />
                <CardText className="mb-0">Posted by: {post.userProfile.fullName}</CardText>
                {/* <CardText className="mb-0">- <em>{post.userProfileId.userType.name}</em></CardText> */}
                <Badge variant="info" pill>{post.category.name}</Badge>
                {/* <CardText>Category: {post.category.name}</CardText> */}
                <div className="mt-3">
                    <Link to={`/post/edit/${post.id}`} className="btn btn-sm btn-secondary btn-info">
                       Edit
                    </Link>
                </div>
            </CardBody>
        </Card>
    </>
    );
};

export default Post;
