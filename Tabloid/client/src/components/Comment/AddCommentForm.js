import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { CommentContext } from "../../providers/CommentProvider";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const AddComment = () => {

    const { id } = useParams();
    const history = useHistory();
    const { addComment } = useContext(CommentContext);
    const [isLoading, setIsLoading] = useState(false)
    const [newComment, setNewComment] = useState({
        postId: parseInt(id),
        userProfileId: 1,
        subject: "",
        content: ""
    })

    const handleFieldChange = (e) => {
        const stateToChange = { ...newComment };
        stateToChange[e.target.id] = e.target.value;
        setNewComment(stateToChange);
    };

    const addNewComment = () => {
        if (newComment.subject === "" || newComment.content === "") {
            alert("fill out both subject and content field");
        } else {
            setIsLoading(true);
            addComment(newComment);
            setIsLoading(false);
            history.push(`/commentsbypost/${id}`)
        }
    }

    return (
        <>
            <Form>
                <h3> Add A Comment </h3>
                <FormGroup>
                    <Label htmlFor="subject"><strong>Subject</strong></Label>
                    <Input className="p-2 bd-highlight justify-content-center"
                        value={newComment.subject}
                        onChange={handleFieldChange}
                        type="text"
                        name="subject"
                        id="subject"
                        required=""
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="content"><strong>Comment</strong></Label>
                    <Input className="p-2 bd-highlight justify-content-center"
                        value={newComment.content}
                        onChange={handleFieldChange}
                        type="textarea"
                        name="content"
                        id="content"
                        required=""
                    />
                </FormGroup>
            </Form >
            <Button block className="submitComment" type="button" color="success" 
            isLoading={isLoading} onClick={addNewComment}>
                {'Save Comment'}
            </Button>
            <Button block className="goBack" type="button" color="danger" 
            isLoading={isLoading}  onClick={() => history.goBack()}>
                {'Cancel'}</Button>
        </>
    )
};
export default AddComment;
