import React, { useState, useContext } from "react";
import { UserProfileContext } from "../providers/UserProfileProvider";

export const CategoryContext = React.createContext();

export function CategoryProvider(props) {
    const apiUrl = "/api/category";
    const { getToken } = useContext(UserProfileContext);

    const [categories, setCategories] = useState([]);

    const getAllCategories = () =>
        getToken().then((token) =>
            fetch(apiUrl, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json())
                .then(setCategories));

    return (
        <CategoryContext.Provider value={{ categories, getAllCategories }}>
            {props.children}
        </CategoryContext.Provider>
    );
};