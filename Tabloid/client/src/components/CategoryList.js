import React, { useContext, useEffect } from "react";
import { CategoryContext } from "../providers/CategoryProvider";
import { ListGroup, ListGroupItem } from "reactstrap";
const CategoryList = () => {
    const { categories, getAllCategories } = useContext(CategoryContext);

    useEffect(() => {
        getAllCategories();
    }, []);

    return (
        <div>
            <h1>Categories</h1>
            {categories.map((category) => (

                <div key={category.id}>
                    <ListGroup>
                        <ListGroupItem>{category.name}</ListGroupItem>
                    </ListGroup>

                </div>
            ))}
        </div>
    );
};

export default CategoryList;