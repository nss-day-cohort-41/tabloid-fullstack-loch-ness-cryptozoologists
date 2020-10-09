import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { PostContext } from "../providers/PostProvider";
import { CategoryContext } from "../providers/CategoryProvider";
export default function PostForm() {
  const { addPost } = useContext(PostContext);
  const [post, setPost] = useState({ postTitle: "", postContent: "" ,postImage: undefined, postCategory: "", isApproved: true, content: "", createDateTime: "", publishDateTime: "", categoryId: 0, userProfileId: 0 })
  const { category, getAllCategories } = useContext(CategoryContext);

/*   const submitForm = (e) => {
    e.preventDefault();
    addPost({ text: postText })
    .then(() => history.push("/"))
    .catch((err) => alert(`An error ocurred: ${err.message}`));
  };
 */

  const submitForm = (e) => {
    post.createDateTime = new Date();
    post.categoryId = parseInt(post.categoryId);
    addPost(post).then((p) => {
      history.push(`/post/${p.id}`);
    });
  };


  const history = useHistory();
  const currentUser = JSON.parse(sessionStorage.userProfile);

  useEffect(() => {
      getAllCategories();
  }, []);

  return (
    <Form onSubmit={submitForm}>

      <FormGroup>
        <Label for="postTitle">Title</Label>
        <Input id="postTitle" type="text" onChange={e => setPost(e.target.value)} />
      </FormGroup>

      <FormGroup>
        <Label for="postContent">Content</Label>
        <textarea id="postContent" type="textarea" rows ="8" onChange={e => setPost(e.target.value)}></textarea>
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
