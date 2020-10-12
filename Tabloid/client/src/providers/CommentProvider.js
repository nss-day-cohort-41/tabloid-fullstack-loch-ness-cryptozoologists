import React, { useState, useContext } from "react";
import { UserProfileContext } from "../providers/UserProfileProvider";

export const CommentContext = React.createContext();

export function CommentProvider(props) {
    const apiUrl = "/api/comment/"; //Id Gifter
    const { getToken } = useContext(UserProfileContext);

    const [comments, setComments] = useState([]);

    const getComments = (postId) => {
        return getToken().then((token) =>
            fetch(apiUrl + `${postId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json()).then(setComments))
    };

    return (
        <CommentContext.Provider value={{ comments, getComments }}>
            {props.children}
        </CommentContext.Provider>
    );
};
