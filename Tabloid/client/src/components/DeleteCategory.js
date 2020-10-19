
import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { CategoryContext } from "../providers/CategoryProvider";
import { Card, CardBody, Button } from "reactstrap";
import { UserProfileContext } from "../providers/UserProfileProvider";

const DeleteCategory = () => {


    const { id } = useParams();

    const history = useHistory();
    const { categories, deleteCategory, getCategoryById } = useContext(CategoryContext);
    const { activeUser } = useContext(UserProfileContext);


    useEffect(() => {
        getCategoryById(id);
    }, [])


    const deleteACategory = () => {
        deleteCategory(id).then(history.goBack())
    }

    return (
        <>
            <div>

                <h3>Are you sure you want to delete this category? </h3>

                <Button block className="deleteCategoryButton" type="button" color="secondary" onClick={deleteACategory}>
                    {'Delete Category'}
                </Button>

                <Button block className="returnToListButton" type="button" color="secondary" onClick={() => history.goBack()}>
                    {'Cancel'}
                </Button>

            </div>
        </>
    )

};

export default DeleteCategory;