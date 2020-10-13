import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { CategoryContext } from "../providers/CategoryProvider";

export default function CategoryEditForm() {
    const history = useHistory();
    const { getSingleCategory, editCategory, category } = useContext(CategoryContext);
    const [categoryName, setCategoryName] = useState({});
    const { id } = useParams();


    const handleFieldChange = evt => {
        const stateToChange = { ...categoryName };
        stateToChange[evt.target.id] = evt.target.value;
        setCategoryName(stateToChange);
    }
    const submitForm = (e) => {
        e.preventDefault();
        editCategory(categoryName)

            .then(() => history.push("/categories"))

            .catch((err) => alert(`An error ocurred: ${err.message}`))

    };

    const cancelSubmit = () => {
        history.push("/categories")
    };

    useEffect(() => {
        getSingleCategory(id);
    }, [id]);
    useEffect(() => {
        setCategoryName(category);
    }, [category]);

    return (
        <Form onSubmit={submitForm}>
            <FormGroup>
                <Label for="categoryName">Category</Label>
                <Input id="categoryName" type="textarea" defaultValue={categoryName.name} maxLength="50" onChange={handleFieldChange} />

            </FormGroup>
            <FormGroup>
                <Button>Save</Button>
                <Button onClick={cancelSubmit}>Cancel</Button>
            </FormGroup>
        </Form>
    );
}
