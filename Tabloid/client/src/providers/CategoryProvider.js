import React, { useState } from "react";

export const CategoryContext = React.createContext();

export const CategoryProvider = (props) => {
    const [categories, setCategories] = useState([]);

    const getAllCategories = () => {
        return fetch("/api/category")
            .then((res) => res.json())
            .then(setCategories);
    };
    return (
        <CategoryContext.Provider value={{ categories, getAllCategories }}>
            {props.children}
        </CategoryContext.Provider>
    );
};