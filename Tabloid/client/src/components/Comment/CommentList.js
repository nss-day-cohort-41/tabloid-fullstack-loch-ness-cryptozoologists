import React, { useContext, useEffect } from "react";
import { CommentContext } from "../../providers/CommentProvider";
import { PostContext } from "../../providers/PostProvider";
import { Col, Row, Button, Card, CardBody, CardTitle, CardText } from "reactstrap";
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
    
    return (
        <>           
            <Link to={`/post/${id}`}>Back to Post</Link> 
                {comments.length === 0 ? <p>This post has no comments assocaited.</p> :
                    <div className="container">
                        <div>
                            <div>
                                {comments && comments.map((comment) => {
                                    return (
                                        <Card>
                                        <CardBody>
                                            <CardTitle><strong>Subject:</strong></CardTitle>
                                            <CardText>{comment.subject}</CardText>
                                            <CardTitle><strong>Comment:</strong></CardTitle>
                                            <CardText>{comment.content}</CardText>
                                            <CardTitle><strong>Date Posted:</strong></CardTitle>
                                            <CardText>{comment.createDateTime.substring(0, 10)}</CardText>
                                            <CardTitle><strong>Posted by:</strong></CardTitle>
                                            <CardText>{comment.userProfile.displayName}</CardText> 
                                            <Link to={`/comments/delete/${comment.id}`}><Button>Delete</Button></Link>
                                            <br />
                                            <br />
                                            <Link to={`/comments/edit/${comment.id}`}><Button>Edit</Button></Link>
                                        </CardBody>
                                        </Card>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                }
        </>
    );
};

export default CommentList;