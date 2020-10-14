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

    // const CategoryToBeDeleted = (category) => {
    //     deleteCategory(category.id)
    // }

    return (
        <>
            <div>
                <h1>Categories</h1>
                <Button type="button" href={`/categories/add`} color="secondary">Add Category</Button>
                {categories.map((category) => (

                    <div key={category.id}>
                        <ListGroup>
                            <ListGroupItem>{category.name} </ListGroupItem>
                            <Button type="button" onClick={() => history.push(`/categories/edit/${category.id}`)} color="secondary" className="float-right">Edit</Button>
                        </ListGroup>

                    </div>

                ))}
            </div>
        </>
    );
};

export default CategoryList;