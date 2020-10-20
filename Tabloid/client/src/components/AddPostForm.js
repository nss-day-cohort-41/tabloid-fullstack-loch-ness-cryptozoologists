import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { PostContext } from "../providers/PostProvider";

export default function AddPostForm() {
    const history = useHistory();
    const { addPost } = useContext(PostContext);

    const [newPost, setNewPost] = useState({
        title: "",
        content: "",
        category: "",
        imageUrl: "",
        publishDateTime: ""
    });

     const handleFieldChange = (e) => {
        const stateToChange = { ...newPost };
        stateToChange[e.target.id] = e.target.value;
        setNewPost(stateToChange);
    };

    const submitForm = (e) => {
        e.preventDefault();
        addPost({
            title: '',
            content: '',
            category: '',
            imageUrl: '',
            publishDateTime: ''
        })
        .then(() => history.push("/post"))
        .catch((err) => alert(`An error ocurred: ${err.message}`));
    };

    return (
        <Form onSubmit={submitForm}>

            <FormGroup>
                <Label for="postTitle">Title</Label>
                <Input
                    id="postTitle"
                    type="input"
                    onChange={handleFieldChange}
                />
            </FormGroup>

            <FormGroup>
                <Label for="postContent">Content</Label>
                <Input
                    id="postContent"
                    type="textarea"
                    onChange={handleFieldChange}
                />
            </FormGroup>

            <FormGroup>
                <Label for="postCategory">Category</Label>
                <Input
                    id="postCategory"
                    type="input"
                    onChange={handleFieldChange}
                />
            </FormGroup>

            <FormGroup>
                <Label for="postImageUrl">Image Url</Label>
                <Input
                    id="postImageUrl"
                    type="input"
                    onChange={handleFieldChange}
                />
            </FormGroup>

            <FormGroup>
                <Label for="postPublishDateTime">PublishDateTime</Label>
                <Input
                    id="postPublishDateTime"
                    type="date"
                    onChange={handleFieldChange}
                />
            </FormGroup>


            <FormGroup>
                <Button>Save</Button>
            </FormGroup>
        </Form>
    );
}
