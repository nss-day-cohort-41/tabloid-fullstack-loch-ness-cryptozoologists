import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
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
            <Row className="justify-content-center">
                <div class="dh-grid">
                    {posts.map((post) => (
                    <div class="dh-card">
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
