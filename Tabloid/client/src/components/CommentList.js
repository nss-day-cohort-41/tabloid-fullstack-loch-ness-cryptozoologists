import React, { useContext, useEffect } from "react";
import { CommentContext } from "../providers/CommentProvider";
import { PostContext } from "../providers/PostProvider";
import { Col, Row, Button, Card, CardBody } from "reactstrap";
import { Link, useParams } from "react-router-dom";


const CommentList = () => {
    const { comments, getAllCommentsForPost } = useContext(CommentContext);
    const { post, getPost } = useContext(PostContext);
    const { id } = useParams();
    const { postId } = useParams();

    useEffect(() => {
        getAllCommentsForPost(id);
        getPost(id);
    }, []);

    const currentUser = JSON.parse(sessionStorage.getItem('userProfile')).firstName;
    console.log(currentUser);
    const test = comments.userProfile;
    console.log(test);
    return (
        <>

            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Row className="justify-content-center">

                </Row>
                {comments.length === 0 ? <p>This post has no comments assocaited.</p> :
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="cards-column">
                                {comments && comments.map((comment) => {
                                    return (
                                        <CardBody>
                                            <h6>Subject</h6>
                                            <p>{comment.subject}</p>
                                            <h6>Comment</h6>
                                            <p>{comment.content}</p>
                                            <h6>Date Posted</h6>
                                            <p>{comment.createDateTime}</p>
                                            <h6>Posted by:</h6>
                                            <p>{currentUser}</p>
                                            <Link to={`/comments/delete/${comment.id}`}>Delete</Link>
                                            <br />
                                            <Link to={`/comments/${comment.id}/edit`}>Edit</Link>
                                        </CardBody>
                                    )
                                })}
                            </div>
                        </div>
                        <Link to={`/post/${id}`}>
                            Back
                        </Link>
                    </div>

                }
            </Col>
        </>
    );
};

export default CommentList;