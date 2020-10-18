import React, { useState } from "react";
import * as firebase from "firebase/app";

export const CommentContext = React.createContext();

export const CommentProvider = (props) => {

    const [comments, setComments] = useState([]);

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


    return (

        <CommentContext.Provider value={{ comments, getAllCommentsForPost, addComment }}>
            {props.children}
        </CommentContext.Provider>
    );
}