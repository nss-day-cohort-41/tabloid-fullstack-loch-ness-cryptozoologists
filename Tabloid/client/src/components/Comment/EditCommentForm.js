import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { CommentContext } from "../../providers/CommentProvider";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const EditComment = () => {
    let userId = sessionStorage.userProfileId

    const { id } = useParams();
    const history = useHistory();

    const { editComment, comment, getCommentById } = useContext(CommentContext);
    const [isLoading, setIsLoading] = useState(false);
    const [updatedComment, setUpdatedComment] = useState({})


    useEffect(() => {
        getCommentById(id)




    }, [])

    const handleEditFieldChange = (e) => {
        const stateToChange = { ...updatedComment }
        stateToChange[e.target.id] = e.target.value;
        setUpdatedComment(stateToChange)
    }

    // useEffect(() => {
    //     setUpdatedComment(comment)

    //      {

    //         history.push("/post");
    //     }
    // }, [comment])


    const editAComment = (e) => {
       
        setIsLoading(true);
        editComment(updatedComment);
        setIsLoading(false);
        history.push(`/comments/details/${id}`);
    }

    return (
        <>
            {updatedComment &&
                <Form>
                    <h3> Edit A Comment </h3>
                    <FormGroup>
                        <Label htmlFor="subject"><strong>Subject</strong></Label>
                        <Input className="p-2 bd-highlight justify-content-center"
                            defaultValue={updatedComment.subject}
                            onChange={handleEditFieldChange}
                            type="text"
                            name="subject"
                            id="subject"

                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="content"><strong>Comment</strong></Label>
                        <Input className="p-2 bd-highlight justify-content-center"
                            defaultValue={updatedComment.content}
                            onChange={handleEditFieldChange}
                            type="textarea"
                            name="content"
                            id="content"
                        />
                    </FormGroup>
                </Form >

            }

            <Button block className="editComment" type="button"  isLoading={isLoading} onClick={editAComment}>
                {'Save Edited Comment'}
            </Button>
            <Button block className="cancelEdit" type="button"  isLoading={isLoading} onClick={() => history.goBack()}>
                {'Cancel'}
            </Button>



        </>
    )
};

export default EditComment;