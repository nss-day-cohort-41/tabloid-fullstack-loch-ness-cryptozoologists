import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { CategoryContext } from "../providers/CategoryProvider";

export default function CategoryEditForm() {
    //getting props from useContext
    const { getSingleCategory, editCategory } = useContext(CategoryContext);
    //useHistory give access to the history instance that you may use to navigate
    const history = useHistory();
    //creating the state for the current category
    const [categoryText, setCategoryText] = useState({ id: "", name: "", userProfileId: null });
    //the id is the route Param categories/edit/1
    const { id } = useParams();
    //set loading to false. isLoading make sure  user can't click the button before it is loaded
    const [isLoading, setIsLoading] = useState(false);



    const handleFieldChange = evt => {
        //stateToChange is a copy of categoryText
        const stateToChange = { ...categoryText };
        //this is the value being changed. Its targeting the id and changing the value
        stateToChange[evt.target.id] = evt.target.value;
        //this is setting the change and actually changing the value
        setCategoryText(stateToChange);
    }

    const submitForm = (e) => {
        //this is prevent the browser from reloading by default
        e.preventDefault();
        // changing the isLoading to true
        setIsLoading(true);
        //making a new Object  
        const updatedCategory = {
            name: categoryText.name,
            id: categoryText.id
        }

        editCategory(updatedCategory)
            //we are directed back to the category page
            .then(() => history.push("/categories"))
            //error message 
            .catch((err) => alert(`An error ocurred: ${err.message}`))

    };

    // this allows the user to cancel the edit
    const cancelSubmit = () => {
        // takes the user back to the category page
        history.push("/categories")
    };

    useEffect(() => {
        //get the category by id
        getSingleCategory(id)
            //reset the category being edited
            .then(setCategoryText)
        setIsLoading(false);
    }, []);

    return (
        <Form onSubmit={submitForm}>
            <FormGroup>
                <Label>Category</Label>

                <Input id="name"
                    //id is name
                    //the type is a textarea
                    type="textarea"
                    //getting the value of name
                    value={categoryText.name}
                    maxLength="50"
                    //listening for changes
                    onChange={handleFieldChange} />

            </FormGroup>
            <FormGroup>
                <Button disabled={isLoading}>Save</Button>
                <Button onClick={cancelSubmit}>Cancel</Button>
            </FormGroup>
        </Form>
    );
}
