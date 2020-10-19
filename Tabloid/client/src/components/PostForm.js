import React, { useState, useContext, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { PostContext } from "../providers/PostProvider";
import { useHistory, Link, useParams } from "react-router-dom";
import { CategoryContext } from "../providers/CategoryProvider";
export default function PostForm() {
  const { getPost, updatePost } = useContext(PostContext);
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageLocation, setImageLocation] = useState("");
  const [createDateTime, setCreateDateTime] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const { categories, getAllCategories } = useContext(CategoryContext);
  const [isLoading, setIsLoading] = useState(false);
  const [userProfileId, setUserProfileId] = useState("");
  const history = useHistory();

  useEffect(() => {
    getAllCategories()
  }, []);

  const submitForm = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const editedPost = {
        id: post.id,
        title,
        content,
        imageLocation,
        categoryId,
        createDateTime: post.createDateTime,
        publishDateTime: post.publishDateTime,
        isApproved: post.isApproved,
        categoryId,
        userProfileId: post.userProfileId
    }

    editedPost.categoryId = JSON.parse(editedPost.categoryId)
    if (editedPost.title === "") {
      editedPost.title = post.title
      }
      if (editedPost.content === "") {
        editedPost.content = post.content
      }
      if (editedPost.imageLocation === "") {
        editedPost.imageLocation = post.imageLocation
      }
      if (editedPost.categoryId === 0) {
        editedPost.categoryId = post.categoryId
      }

    updatePost(editedPost)
      .then(() => {
        history.push(`/post/${post.id}`)
      });
  };

  useEffect(() => {
    getPost(postId).then((res)=>{
        setPost(res)
        setIsLoading(false);
    });
  }, []);

  //const currentUser = JSON.parse(sessionStorage.userProfile);

  if (!post) {
    return null;
  }

  if (post.userProfileId === JSON.parse(sessionStorage.getItem("userProfile")).id) {
    return (
      <>
        <h1 className="mb-4">Posts</h1>
        <Form onSubmit={submitForm}>

          <FormGroup>
            <Label for="title">Title</Label>
            <Input type="text"
              id="title"
              defaultValue={post.title}
              onChange={e => setTitle(e.target.value)}
              />
          </FormGroup>

          <FormGroup>
            <Label for="content">Content</Label>
            <Input type="textarea" rows="4"
              id="content"
              defaultValue={post.content}
              onChange={e => setContent(e.target.value)}
              />
          </FormGroup>

          <FormGroup>
            <Label for="imageLocation">Image</Label>
            <Input type="text"
              id="imageLocation"
              defaultValue={post.imageLocation}
              onChange={e => setImageLocation(e.target.value)}
              />
          </FormGroup>

          <FormGroup>
            <Label for="postCategory">Category</Label>
            <select defaultValue=""
              id="categoryId"
              onChange={(e) => setCategoryId(e.target.value)}>
              <option defaultValue={post.categoryId} hidden>{post.category.name}</option>
                  {categories.map(e => (
                    <option key={e.id} value={e.id}>
                        {e.name}
                    </option>
                  ))}
            </select>
          </FormGroup>

          {/* SUBMIT */}
          <FormGroup className="mt-5">
            <Button color="info" >Submit</Button>
            <Button color="secondary" className="ml-4"
                onClick={() => { history.push(`/post`) }}>
                Cancel
            </Button>
          </FormGroup>
        </Form>
      </>
    );
    } else {
      return (
        <>
          <h1>Fail -------------- </h1>
          <p>This didn't work...</p>
          <pre>
            if (post.userProfileId === JSON.parse(sessionStorage.getItem("userProfile")).id)
          </pre>
        </>
      )
    }
}
