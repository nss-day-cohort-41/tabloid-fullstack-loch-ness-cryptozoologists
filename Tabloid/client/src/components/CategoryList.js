import React, { useContext, useEffect } from "react";
import { CategoryContext } from "../providers/CategoryProvider";

const CategoryList = () => {
    const { categories, getAllCategories } = useContext(CategoryContext);

    useEffect(() => {
        getAllCategories();
    }, []);

    return (
        <div>
            {categories.map((category) => (
                <div key={category.id}>
                    <p>
                        <strong>{category.name}</strong>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default CategoryList;