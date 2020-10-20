import React, { useEffect, useContext, useState } from "react";
import { PostContext } from "../providers/PostProvider";
import { Link, useParams } from "react-router-dom";
import Post from "./Post";
import { CommentContext } from "../providers/CommentProvider";
import { Button } from "reactstrap";

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
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6">

                    <Post key={post.id} post={post} />
                    <strong>{post.title}</strong>
                    <br />
                    <Link to={`/commentsbypost/${id}`}><Button variant="dark">View Comments</Button></Link>
                    <br />
                    <Link to={`/comments/add/${id}`}><Button>Add Comment</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;