import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { CategoryContext } from "../providers/CategoryProvider";

export default function CategoryEditForm() {
    const { getSingleCategory, editCategory } = useContext(CategoryContext);
    const history = useHistory();
    const [categoryText, setCategoryText] = useState({ id: "", name: "", userProfileId: null });
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);



    const handleFieldChange = evt => {
        const stateToChange = { ...categoryText };
        stateToChange[evt.target.id] = evt.target.value;
        setCategoryText(stateToChange);
    }

    const submitForm = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const updatedCategory = {
            name: categoryText.name,
            id: categoryText.id
        }

        editCategory(updatedCategory)
            .then(() => history.push("/categories"))
            .catch((err) => alert(`An error ocurred: ${err.message}`))

    };


    const cancelSubmit = () => {
        history.push("/categories")
    };

    useEffect(() => {
        getSingleCategory(id)
            .then(setCategoryText)
        setIsLoading(false);
    }, []);

    return (
        <Form onSubmit={submitForm}>
            <FormGroup>
                <Label>Category</Label>
                <Input id="name"
                    type="textarea"
                    value={categoryText.name}
                    maxLength="50"
                    onChange={handleFieldChange} />

            </FormGroup>
            <FormGroup>
                <Button disabled={isLoading}>Save</Button>
                <Button onClick={cancelSubmit}>Cancel</Button>
            </FormGroup>
        </Form>
    );
}
