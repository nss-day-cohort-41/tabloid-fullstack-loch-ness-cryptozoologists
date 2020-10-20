
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { CategoryContext } from "../providers/CategoryProvider";
import { PostContext } from "../providers/PostProvider";
import { Card, CardBody, Button } from "reactstrap";


const DeleteCategory = () => {

    const { id } = useParams();
    const history = useHistory();
    const { category, deleteCategory, getSingleCategory, GetCategroyById } = useContext(CategoryContext);
    const { posts, getAllPosts } = useContext(PostContext);
    const [categoryText, setCategoryText] = useState({})

    const handleDelete = (evt) => {
        evt.preventDefault();
        //call getAllPosts
        const getAllPosts(post.categoryId);
        //loop through my post to see if the categoryId = post.categoryId
        forEach(categoryId in post.categoryId)
        {
            getAllPosts
        }

        if (categoryId === post.categoryId) {
            return "Note, you can not delete categories associated with post(s). Please remove the post(s) from this category to delete."
        } else {
            deleteCategory(id)
                .then(() => history.push("/categories"))
                .catch((err) => alert(`An error ocurred: ${err.message}`));
        }
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