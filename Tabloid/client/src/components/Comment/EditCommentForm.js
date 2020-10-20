import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { CommentContext } from "../../providers/CommentProvider";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const EditComment = () => {
    const { id } = useParams(); //Url parameters for commentId
    const history = useHistory();
    const { editComment, getCommentById } = useContext(CommentContext); //Pulling from Context
    const [isLoading, setIsLoading] = useState(false);
    const [updatedComment, setUpdatedComment] = useState({}) //Setting new comment after updated

    useEffect(() => { //Every time the page is loaded essentially
        getCommentById(id).then(setUpdatedComment); //Get the ID then populate the fields with the existing values
    }, [])

    const handleEditFieldChange = (e) => { //Affordance for when values are updated in the input
        const stateToChange = { ...updatedComment }
        stateToChange[e.target.id] = e.target.value;
        setUpdatedComment(stateToChange)
    }

    const editAComment = (e) => {   
        setIsLoading(true);
        editComment(updatedComment);
        setIsLoading(false);
        history.goBack();
    }

    return (
        <>         
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
            <Button block className="editComment" type="button" color="success" isLoading={isLoading} 
                         onClick={editAComment}>
                {'Submit'}
            </Button>
            <Button block className="cancelEdit" type="button" color="danger"  isLoading={isLoading} 
                         onClick={() => history.goBack()}>
                {'Cancel'}
            </Button>
        </>
    )
};

export default EditComment;

//Step one: read
//Step two: comment
//Step three: format
//Step four: understand