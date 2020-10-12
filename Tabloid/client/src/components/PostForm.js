import React, { useState, useContext, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { PostContext } from "../providers/PostProvider";
import { useHistory, Link, useParams } from "react-router-dom";
import { CategoryContext } from "../providers/CategoryProvider";
import Post from './Post'
//import { UserProfileContext } from "../providers/UserProfileProvider";

export default function PostForm() {
  const { getPost } = useContext(PostContext);
  const { editPost } = useContext(PostContext);
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const { categories, getAllCategories } = useContext(CategoryContext);

  useEffect(() => {
    getPost(id).then(setPost).then(
      getAllCategories().then(console.log("Yo", post))
      )
  }, []);

  const submitForm = (e) => {
    post.createDateTime = new Date();
    post.categoryId = parseInt(post.categoryId);
    editPost(post).then((p) => {
      history.push(`/post/${p.id}`);
    });
  };

  const history = useHistory();
  const currentUser = JSON.parse(sessionStorage.userProfile);

  return (
    <Form onSubmit={submitForm}>

      <FormGroup>
        <Label for="postTitle">Title</Label>
        <Input id="postTitle" type="text" onChange={e => setPost(e.target.value)} />
      </FormGroup>

      <FormGroup>
        <Label for="postContent">Content</Label>
        <Input type="textarea" id="postContent" rows ="4" onChange={e => setPost(e.target.value)} />
      </FormGroup>

      <FormGroup>
        <Label for="postImage">Image</Label>
        <Input id="postImage" type="text" onChange={e => setPost(e.target.value)} />
      </FormGroup>

      <FormGroup>
        <Label for="postCategory">Category</Label>
        <Input id="postCategory" type="text" onChange={e => setPost(e.target.value)} />
      </FormGroup>

      {/*
       p.CreateDateTime,
       p.PublishDateTime,
       p.IsApproved,
       p.CategoryId,
       p.UserProfileId,
       c.[Name] AS CategoryName,
       u.FirstName,
       u.LastName,
       u.DisplayName,
       u.Email,
       u.CreateDateTime,
       u.ImageLocation AS AvatarImage,
       u.UserTypeId,
       ut.[Name] AS UserTypeName
      */}

      {/* SUBMIT */}
      <FormGroup>
        <Button>Submit</Button>
      </FormGroup>
    </Form>
  );
}
