import React, { useContext, useEffect, useState, useRef } from "react";
import { PostContext } from "../providers/PostProvider";
import { Container, Row } from 'reactstrap';
import Post from "./Post";
import { useHistory, Link } from "react-router-dom";

const PostList = () => {
    const { posts, getAllPosts } = useContext(PostContext);
    //const history = useHistory();

    useEffect(() => {
        getAllPosts();
    }, []);

    return (
        <Container>
            <h1>Posts</h1>
            <Link to={`/post/add`}>
                <span className="dh-addTag">&#x2b;</span>
            </Link>
            <Row className="justify-content-center">
                <div className="dh-grid">
                    {posts.map((post) => (
                    <div className="dh-card">
                        <Link to={`/post/${post.id}`}>
                            <Post key={post.id} post={post} />
                        </Link>
                    </div>
                    ))}
                </div>
            </Row>
        </Container>
    );
};

export default PostList;
