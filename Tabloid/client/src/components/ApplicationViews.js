import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import CategoryList from "./CategoryList";
import PostList from "./PostList";
import CommentList from "./CommentList";
import PostDetails from "./PostDetails";
import PostEditForm from "./PostEditForm";
import CategoryAddForm from "./CategoryAddForm";
import CategoryEditForm from "./CategoryEditForm";
import AddTagForm from "./AddTagForm";
import TagList from "./TagList";
import EditTagForm from "./EditTagForm";


export default function ApplicationViews() {
  const { isLoggedIn } = useContext(UserProfileContext);

  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <PostList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/post" exact>
          {isLoggedIn ? <PostList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/post/:id" exact>
          {isLoggedIn ? <PostDetails /> : <Redirect to="/login" />}
        </Route>

        <Route path="/post/edit/:id" exact>
          {isLoggedIn ? <PostEditForm /> : <Redirect to="/login" />}
        </Route>

        <Route path="/tags/add">
          <AddTagForm />
        </Route>

        <Route path="/tags/edit/:id">
          <EditTagForm />
        </Route>

        <Route path="/tags" exact>
          <TagList />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/categories" exact>
          <CategoryList />
        </Route>

        <Route path="/categories/add" exact>
          <CategoryAddForm />
        </Route>

        <Route path="/categories/edit/:id" exact>
          <CategoryEditForm />
        </Route>

        <Route path="/comments/:id">
          <CommentList />
        </Route>

      </Switch>
    </main >
  );
};
