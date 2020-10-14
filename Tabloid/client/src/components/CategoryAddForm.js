import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { CategoryContext } from "../providers/CategoryProvider";

export default function CategoryAddForm() {

    const history = useHistory();
    const { addCategory } = useContext(CategoryContext);
    const [categoryName, setCategoryName] = useState();

    const submitForm = (e) => {
        e.preventDefault();
        addCategory({ Name: categoryName })

            .then(() => history.push("/categories"))
            .catch((err) => alert(`An error ocurred: ${err.message}`))

    };

    return (
        <Form onSubmit={submitForm}>
            <FormGroup>
                <h1>Add</h1>
                <Label for="categoryName">Category</Label>
                <Input id="categoryName" type="textarea" onChange={e => setCategoryName(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Button>Save</Button>
            </FormGroup>
        </Form>
    );

}
