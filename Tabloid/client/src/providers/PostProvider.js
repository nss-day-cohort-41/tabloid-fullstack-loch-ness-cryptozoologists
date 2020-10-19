import React, { useContext, useState } from "react";
import { UserProfileContext } from "../providers/UserProfileProvider";

export const PostContext = React.createContext();

export const PostProvider = (props) => {

    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
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

    const getPost = (id) => {
        getToken().then((token) =>
        fetch(`/api/post/${id}`, {
            method: "GET",
            headers: {
            Authorization: `Bearer ${token}`
            }
        })).then((resp) => resp.json())
        .then(setPost);
    };

    const getById = (id) => {
        getToken().then((token) =>
        fetch(`/api/post/${id}`, {
            method: "GET",
            headers: {
            Authorization: `Bearer ${token}`
            }
        })).then((resp) => resp.json())
        .then(setPost);
    };

    const GetPublishedPostById = (id) =>
        getToken().then((token) =>
            fetch(apiUrl + `${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json()))

    const updatePost = (post) => {
        return getToken().then((token) => fetch(`/api/post/edit/${post}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(post)
            })
            )
    };

    const addPost = (post) =>
        getToken().then((token) =>
            fetch(apiUrl, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(post)
            }).then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                throw new Error("Unauthorized");
            }));

    const DeletePost = (id) =>
        getToken().then((token) =>
            fetch(apiUrl + `${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }));

    return (
        <PostContext.Provider value={{ post, posts, setPost, getAllPosts, getPost, updatePost, addPost, DeletePost, GetPublishedPostById, getById}}>
            {props.children}
        </PostContext.Provider>
    );
};
