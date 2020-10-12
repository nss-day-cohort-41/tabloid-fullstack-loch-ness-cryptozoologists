import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { CategoryContext } from "../providers/CategoryProvider";

export default function CategoryEditForm() {
    const history = useHistory
    const { editCategory } = useContext(CategoryContext);
    const [categoryName, setCategoryName] = useState();



    const submitForm = (e) => {
        e.preventDefault();
        editCategory({ Name: categoryName })

            .then(() => history.push("/categories"))

            .catch((err) => alert(`An error ocurred: ${err.message}`))

    };

    useEffect(() => {

    }, []);

    return (
        <Form onSubmit={submitForm}>
            <FormGroup>
                <Label for="categoryName">Category</Label>
                <Input id="categoryName" type="textarea" onChange={e => setCategoryName(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Button>Save</Button>
            </FormGroup>
        </Form>
    );
}
