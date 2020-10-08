import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const CommentContext = React.createContext()

export function CommentProvider(props) {
    const apiUrl = "/api/comment";
    const { getToken } = useContext(UserProfileContext);

    const [comments, setComments] = useState([]);

    const getAllComments = () =>
        getToken().then((token) =>
            fetch(apiUrl, {
                method: "Get",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json())
                .then(setComments));
    return (
        <CommentContext.Provider value={{ comments, getAllComments }}>
            {props.children}
        </CommentContext.Provider>
    )

}

