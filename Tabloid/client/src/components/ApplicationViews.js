import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import CategoryList from "./CategoryList";
import PostList from "./PostList";
import PostDetails from "./PostDetails";
import CategoryAddForm from "./CategoryAddForm";
import CategoryEditForm from "./CategoryEditForm";
import AddTagForm from "./AddTagForm";
import TagList from "./TagList";
import EditTagForm from "./EditTagForm";
import CommentList from "../components/Comment/CommentList";
import AddComment from "../components/Comment/AddCommentForm";
import DeleteComment from "../components/Comment/DeleteComment";
import EditComment from "../components/Comment/EditCommentForm";
import UserProfileList from "./UserProfileList";

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
        
        {/* Comments */}
        <Route path="/commentsbypost/:id" exact>
          {isLoggedIn ? <CommentList /> : <Redirect to="/login" />}
        </Route>
        <Route path="/comments/add/:id" exact>
          {isLoggedIn ? <AddComment /> : <Redirect to="/login" />}
        </Route>
        <Route path="/comments/delete/:id" exact>
          {isLoggedIn ? <DeleteComment /> : <Redirect to="/login" />}
        </Route>
        <Route path="/comments/edit/:id" exact>
           <EditComment />
        </Route>
        {/* End Comments */}
        <Route path="/userprofile">
          <UserProfileList />
        </Route>
      </Switch>
    </main >
  );
};