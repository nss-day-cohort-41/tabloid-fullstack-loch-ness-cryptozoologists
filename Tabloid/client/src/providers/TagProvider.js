import React, { useState, useContext } from "react";
import { UserProfileContext } from "../providers/UserProfileProvider";

export const TagContext = React.createContext();

export function TagProvider(props) {
  const apiUrl = "/api/tag";
  const { getToken } = useContext(UserProfileContext);

  const [tags, setTags] = useState([]);


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

  const editTag = (updatedTag) =>
    getToken().then((token) =>
      fetch(`${apiUrl}/${updatedTag.Id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedTag.Name)
      })
        .then(resp => {
          if (resp.ok) {
            return resp.json();
          }
          throw new Error("Unauthorized");
        })
    )

  const getAllTags = () =>
    getToken().then((token) =>
      fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(resp => resp.json())
        .then(setTags));

  const getTagById = (id) =>
    getToken().then((token) =>
      fetch(`${apiUrl}/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(resp => resp.json())
    )

  const deleteTag = (id) =>
    getToken().then((token) =>
      fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        },
      }).then(getAllTags));






  return (
    <TagContext.Provider value={{ tags, getAllTags, addTag, deleteTag, editTag, getTagById }}>
      {props.children}
    </TagContext.Provider>
  );
}
