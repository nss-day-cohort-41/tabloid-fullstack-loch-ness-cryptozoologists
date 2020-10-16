import React, { useContext, useEffect } from "react";
import { Container, Row } from 'reactstrap';
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";
import { Link } from "react-router-dom";

const PostList = () => {
    const { posts, getAllPosts } = useContext(PostContext);

    useEffect(() => {
        getAllPosts();
    }, []);

    return (
        <Container>
            <h1>Posts</h1>
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
