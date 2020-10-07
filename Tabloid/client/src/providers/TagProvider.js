import React, { useState, createContext, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const TagContext = createContext();

export function TagProvider(props) {
  const apiUrl = "/api/tag";
  const { getToken } = useContext(UserProfileContext);

  const [tags, setTags] = useState([]);

  const refreshTags = () =>
    getToken().then((token) =>
      fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(resp => resp.json())
        .then(setTags));

  const addTag = (tag) =>
    getToken().then((token) =>
      fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(tag)
      }).then(resp => {
        if (resp.ok) {
          return resp.json();
        }
        throw new Error("Unauthorized");
      }));

  return (
    <TagContext.Provider value={{ tags, refreshTags, addTag }}>
      {props.children}
    </TagContext.Provider>
  );
}
