import React, { useContext, useState } from "react";
import { UserProfileContext } from "../providers/UserProfileProvider";


export const PostContext = React.createContext();

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([]);
    const { getToken } = useContext(UserProfileContext);
    const apiUrl = "/api/post/";

    const getAllPosts = () =>
        getToken().then((token) =>
            fetch(apiUrl, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json())
                .then(setPosts));

    const getPost = (id) =>
        getToken().then((token) =>
            fetch(apiUrl + `${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json()))

    const updatePost = (id, post) => {
        getToken().then((token) => fetch(`/api/post/edit/${id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post)
        })
        )
    };

    /* const addPost = (post) => {
        return fetch("/api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        });
    }; */

    return (
        <PostContext.Provider value={{ posts, getAllPosts, getPost, updatePost }}>
            {props.children}
        </PostContext.Provider>
    );
};
