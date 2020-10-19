import React, { useState, useEffect, createContext } from "react";
import { Spinner } from "reactstrap";
import * as firebase from "firebase/app";
import "firebase/auth";
import { Redirect } from "react-router-dom";

export const UserProfileContext = createContext();

export function UserProfileProvider(props) {
  const apiUrl = "/api/userprofile";

  const userProfile = sessionStorage.getItem("userProfile");
  const [isLoggedIn, setIsLoggedIn] = useState(userProfile != null);
  const [users, setUsers] = useState([]);
  const [oneUser, setOneUser] = useState([]);

  const [isFirebaseReady, setIsFirebaseReady] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((u) => {
      setIsFirebaseReady(true);
    });
  }, []);

  const login = (email, pw) => {
    return firebase.auth().signInWithEmailAndPassword(email, pw)
      .then((signInResponse) => getUserProfile(signInResponse.user.uid))
      .then((userProfile) => {
        sessionStorage.setItem("userProfile", JSON.stringify(userProfile));
        setIsLoggedIn(true);
      });
  };

  const logout = () => {
    return firebase.auth().signOut()
      .then(() => {
        sessionStorage.clear()
        setIsLoggedIn(false)
      });
  };

  const register = (userProfile, password) => {
    return firebase.auth().createUserWithEmailAndPassword(userProfile.email, password)
      .then((createResponse) => saveUser({ ...userProfile, firebaseUserId: createResponse.user.uid }))
      .then((savedUserProfile) => {
        sessionStorage.setItem("userProfile", JSON.stringify(savedUserProfile))
        setIsLoggedIn(true);
      });
  };

  const getToken = () => firebase.auth().currentUser.getIdToken();

  const getUserProfile = (firebaseUserId) => {
    return getToken().then((token) =>
      fetch(`${apiUrl}/${firebaseUserId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(resp => resp.json()));
  };

  const saveUser = (userProfile) => {
    return getToken().then((token) =>
      fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userProfile)
      }).then(resp => resp.json()));
  };

  const getAllUsers = () =>
  getToken().then((token) =>
    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      },
    }).then((resp) => resp.json())
    .then(setUsers)
  );

  const getUserById = (id) => {
    return getToken().then((token) =>
      fetch(`${apiUrl}/${id}/details`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
      }).then((resp) => resp.json())
      .then(setOneUser)
    )
  };

  return (
    <UserProfileContext.Provider value={{ oneUser, users, isLoggedIn, login, logout, register, getToken, getAllUsers, getUserById }}>
      {isFirebaseReady
        ? props.children
        : <Spinner className="app-spinner dark" />}
    </UserProfileContext.Provider>
  );
}
