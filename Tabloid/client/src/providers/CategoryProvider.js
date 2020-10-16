import React, { useState, useContext } from "react";
// import { useHistory } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";


export const CategoryContext = React.createContext();

export function CategoryProvider(props) {
    const apiUrl = "/api/category";
    const { getToken } = useContext(UserProfileContext);

    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState([]);


    const getAllCategories = () =>
        getToken().then((token) =>
            fetch(apiUrl, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json())
                .then(setCategories));


    const getSingleCategory = (id) =>
        getToken().then((token) =>
            fetch(`/api/category/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json()));



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

    const editCategory = (category) => {
        return getToken().then((token) => {
            fetch((`/api/category/${category.id}`), {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(category)
            })
        })
    };

    const deleteCategory = (id) =>
        getToken().then((token) =>
            fetch(`${apiUrl}/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }).then(getAllCategories));

    return (
        <CategoryContext.Provider value={{ category, categories, getAllCategories, getSingleCategory, addCategory, editCategory, deleteCategory }}>
            {props.children}
        </CategoryContext.Provider>
    );
};