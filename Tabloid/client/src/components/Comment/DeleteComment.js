import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { CommentContext } from "../../providers/CommentProvider";
import { Card, CardBody, Button } from "reactstrap";
import { UserProfileContext } from "../../providers/UserProfileProvider";

const DeleteComment = () => {
    // let userId = sessionStorage.userProfileId

    const { id } = useParams();

    const history = useHistory();
    const { comment, deleteComment, getCommentById } = useContext(CommentContext);
  


    useEffect(() => {
        getCommentById(id);
    }, [])


    const deleteAComment = () => {
        deleteComment(id).then(history.goBack())
    }

    return (
        <>
            <div>

                <h3>Are you sure you want to delete this comment? </h3>

                <Button block className="deleteCommentButton" type="button" color="danger" onClick={deleteAComment}>
                    {'Delete Comment'}
                </Button>

                <Button block className="returnToListButton" type="button" color="success" onClick={() => history.goBack()}>
                    {'Cancel'}
                </Button>

            </div>
        </>
    )

};

export default DeleteComment;