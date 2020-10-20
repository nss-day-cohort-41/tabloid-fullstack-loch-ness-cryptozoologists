
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { CategoryContext } from "../providers/CategoryProvider";
import { Card, CardBody, Button } from "reactstrap";


const DeleteCategory = () => {

    const { id } = useParams();
    const history = useHistory();
    const { category, deleteCategory, getSingleCategory } = useContext(CategoryContext);
    const [categoryText, setCategoryText] = useState({})

    const handleDelete = (evt) => {
        evt.preventDefault();
        deleteCategory(id)
            .then(() => history.push("/category"))
            .catch((err) => alert(`An error ocurred: ${err.message}`));
    }
    useEffect(() => {
        getSingleCategory(id);
    }, [])



    useEffect(() => {
        setCategoryText(category);

    }, [category]);

    return (
        <>
            <div>

                <h3>Are you sure you want to delete this category? </h3>


                <Button type="button" color="secondary" onClick={handleDelete}>
                    Delete
                </Button>

                <Button type="button" id={category.id} color="secondary" onClick={() => history.goBack()}>
                    {'Cancel'}
                </Button>

            </div>
        </>
    )

};

export default DeleteCategory;