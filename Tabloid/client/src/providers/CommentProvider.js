import React, { useState } from "react";
import * as firebase from "firebase/app";

export const CommentContext = React.createContext();

export const CommentProvider = (props) => {

    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState({});

    const getToken = () => firebase.auth().currentUser.getIdToken();

    const getAllCommentsForPost = (postId) => {
        return getToken().then((token) => {
            fetch(`/api/comment/getallcommentsbypost/${postId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json()).then(setComments);
        })
    };


    const addComment = (newComment) => {
        return getToken().then((token) => {
            fetch("/api/comment/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(newComment)
            })
        })
    };


    const deleteComment = (commentId) => {
        return getToken().then((token) => {
            fetch(`/api/comment/${commentId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
    }

    const getCommentById = (commentId) => {
        return getToken().then((token) => {
            fetch(`/api/comment/${commentId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json()).then(setComment)
        })
    };


    return (

        <CommentContext.Provider value={{ comments, getAllCommentsForPost, addComment, getCommentById, deleteComment }}>
            {props.children}
        </CommentContext.Provider>
    );
}