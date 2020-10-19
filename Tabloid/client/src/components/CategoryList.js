import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CategoryContext } from "../providers/CategoryProvider";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
const CategoryList = () => {
    const { categories, getAllCategories } = useContext(CategoryContext);
    const history = useHistory();

    useEffect(() => {
        getAllCategories();
    }, []);

    // getting the category by its id and deleting it
    // const categoryToBeDeleted = (id) => {
    //     deleteCategory(id)

    // }



    return (
        <>
            <div>
                <h1>Categories</h1>
                <Button
                    type="button"
                    href={`/categories/add`}
                    color="secondary">
                    Add Category
                    </Button>
                {categories.map((category) => (

                    <div key={category.id}>
                        <ListGroup>
                            <ListGroupItem>{category.name}</ListGroupItem>
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
                                onClick={() =>
                                    history.push(`/categories/delete/${category.id}`)} >
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