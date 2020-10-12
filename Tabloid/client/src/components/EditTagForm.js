import React, { useState, useContext, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { TagContext } from "../providers/TagProvider";
import { Link, useParams, useHistory } from "react-router-dom";

export default function EditTagForm() {
    const { getTagById, editTag } = useContext(TagContext);
    const [tag, setTag] = useState({ Id: "", Name: "" });
    const { id } = useParams();

    useEffect(() => {
        getTagById(id).then(setTag)
    }, []);
    if (!tag) {
        return null;
    }

    console.log(tag, "red")

    const handleFieldChange = (e) => {
        const stateToChange = { ...tag };
        stateToChange[e.target.id] = e.target.value;
        setTag(stateToChange);
    }

    const submitForm = (e) => {
        e.preventDefault();

        const updatedTag = {
            Id: tag.Id,
            Name: tag.text
        }

        editTag(updatedTag)
    }




    return (
        <Form onSubmit={submitForm}>
            <FormGroup>
                <Label for="tagName">Tag Name:</Label>

                <Input id="text" type="textarea"
                    placeholder={tag.name}
                    onChange={handleFieldChange} />

            </FormGroup>
            <FormGroup>
                <Button>Save</Button>
            </FormGroup>
        </Form>
    );
}