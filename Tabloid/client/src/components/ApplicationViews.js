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
import PostDetails from "./PostDetails";
import AddTagForm from "./AddTagForm";
import TagList from "./TagList";


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

        <Route path="/tags/add">
          <AddTagForm />
        </Route>

        {/* <Route path="/tags/edit">

        </Route> */}

        <Route path="/tags" exact>
          <TagList />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/categories">
          <CategoryList />
        </Route>
        <Route path="/comments/:id">

          <CommentList />

        </Route>

      </Switch>
    </main >
  );
};
