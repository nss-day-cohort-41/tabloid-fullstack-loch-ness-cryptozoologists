import React, { useContext, useEffect } from "react";
import { CommentContext } from "../providers/CommentProvider";
import { PostContext } from "../providers/PostProvider";
import { Col, Row, Button, Card, CardBody } from "reactstrap";
import { Link, useParams } from "react-router-dom";


const CommentList = () => {
    const { comments, getAllCommentsForPost } = useContext(CommentContext);
    const { post, getPost } = useContext(PostContext);
    const { id } = useParams();

    useEffect(() => {
        getAllCommentsForPost(id);
        getPost(id);
    }, []);


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
                                            <p>Posted by: </p>
                                            <Link to={`/comments/delete/${comment.id}`}>Delete</Link>
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