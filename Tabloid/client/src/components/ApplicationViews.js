import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import CategoryList from "./CategoryList";
import { CategoryProvider } from "../providers/CategoryProvider";
import { TagProvider } from "../providers/TagProvider";
import PostList from "./PostList";
import CommentList from "./CommentList";
import Tags from "./Tags";
import PostDetails from "./PostDetails";
import CategoryAddForm from "./CategoryAddForm";
import CategoryEditForm from "./CategoryEditForm";


export default function ApplicationViews() {
  const { isLoggedIn } = useContext(UserProfileContext);

  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Hello /> : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/post/:id">
          {isLoggedIn ? <PostDetails /> : <Redirect to="/login" />}
        </Route>

        <Route path="/post" exact>
          {isLoggedIn ? <PostList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/tags">
          <Tags />
        </Route>



        <Route path="/register" >
          <Register />
        </Route>

        <Route path="/categories" exact>
          <CategoryList />
        </Route>

        <Route path="/categories/edit">
          <CategoryEditForm />
        </Route>


        <Route path="/categories/add">
          <CategoryAddForm />
        </Route>

        <Route path="/comments/:id">

          <CommentList />

        </Route>

      </Switch>
    </main >
  );
};
