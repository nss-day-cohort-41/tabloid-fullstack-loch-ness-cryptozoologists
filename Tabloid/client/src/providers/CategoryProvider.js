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

    const addCategory = (category) =>
        getToken().then((token) =>
            fetch(apiUrl, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(category)
            }).then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                throw new Error("Unauthorized");
            }));
    return (
        <CategoryContext.Provider value={{ categories, getAllCategories, addCategory }}>
            {props.children}
        </CategoryContext.Provider>
    );
};