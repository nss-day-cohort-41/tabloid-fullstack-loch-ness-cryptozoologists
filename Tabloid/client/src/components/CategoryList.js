import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CategoryContext } from "../providers/CategoryProvider";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
const CategoryList = () => {
    const { categories, getAllCategories, deleteCategory } = useContext(CategoryContext);
    const history = useHistory();

    useEffect(() => {
        getAllCategories();
    }, []);

    const categoryToBeDeleted = (id) => {
        console.log(id, "cat")
        deleteCategory(id)
    }

    return (
        <>
            <div>
                <h1>Categories</h1>
                <Button type="button" href={`/categories/add`} color="secondary">Add Category</Button>
                {categories.map((category) => (

                    <div key={category.id}>
                        <ListGroup>
                            <ListGroupItem>{category.name} </ListGroupItem>
                            <Button
                                type="button"
                                onClick={() =>
                                    history.push(`/categories/edit/${category.id}`)}
                                color="secondary"
                                className="float-right">
                                Edit
                            </Button>
                            <Button
                                type="button"
                                color="secondary"
                                className="float-left"
                                onClick={() => categoryToBeDeleted(category.id)}>
                                Delete
                            </Button>
                        </ListGroup>

                    </div>

                ))}
            </div>
        </>
    );
};

export default CategoryList;