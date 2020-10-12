import React, { useContext, useEffect } from "react";
import { CategoryContext } from "../providers/CategoryProvider";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
const CategoryList = () => {
    const { categories, getAllCategories } = useContext(CategoryContext);

    useEffect(() => {
        getAllCategories();
    }, []);

    return (
        <div>
            <h1>Categories</h1>
            <Button type="button" href={`/categories/add`} color="secondary">Add Category</Button>
            {categories.map((category) => (

                <div key={category.id}>
                    <ListGroup>
                        <ListGroupItem>{category.name} <Button type="button" href={`/categories/edit`} color="secondary" className="float-right">Edit</Button></ListGroupItem>
                    </ListGroup>

                </div>

            ))}
        </div>
    );
};

export default CategoryList;