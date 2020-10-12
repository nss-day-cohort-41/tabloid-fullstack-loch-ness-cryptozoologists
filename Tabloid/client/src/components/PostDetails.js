import React, { useEffect, useContext, useState } from "react";
import { PostContext } from "../providers/PostProvider";
import { Link, useParams } from "react-router-dom";
import Post from "./Post";
import { CommentContext } from "../providers/CommentProvider";

const PostDetails = () => {
    const [post, setPost] = useState(null);
    const { getPost } = useContext(PostContext);
    const { id } = useParams();


    useEffect(() => {
        getPost(id).then(setPost);
    }, []);

    if (!post) {
        return null;
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col>
                    <p><Link to={`/post/`}>&#60; Back</Link></p>

                    <Post key={post.id} post={post} />
                    {/* <strong>{post.title}</strong> */}
                    <Link to={`/comments/${id}`}>Comments</Link>

                    <p><Link to={`/post/`}>&#60; Back</Link></p>
                </Col>
            </Row>
        </Container>
    );
};

export default PostDetails;
