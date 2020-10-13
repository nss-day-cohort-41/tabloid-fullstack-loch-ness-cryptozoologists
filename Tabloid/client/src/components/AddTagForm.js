import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { TagContext } from "../providers/TagProvider";

export default function AddTagForm() {
    const history = useHistory();
    const { addTag } = useContext(TagContext);
    const [tagName, setTagName] = useState();

    const submitForm = (e) => {
        e.preventDefault();
        addTag({ name: tagName })
            .then(() => history.push("/tags"))
            .catch((err) => alert(`An error ocurred: ${err.message}`));
    };

    console.log(tagName, "blje")


    return (
        <Form onSubmit={submitForm}>
            <FormGroup>
                <Label for="tagName">Tag</Label>
                <Input id="tagName" type="textarea" onChange={e => setTagName(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Button>Save</Button>
            </FormGroup>
        </Form>
    );
}