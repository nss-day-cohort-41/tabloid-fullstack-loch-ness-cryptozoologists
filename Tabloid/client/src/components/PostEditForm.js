import React, { useState, useContext, useEffect } from "react";
import { PostContext } from "../providers/PostProvider";
import { CategoryContext } from "../providers/CategoryProvider";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory, Link, useParams } from "react-router-dom";
export default function PostEditForm() {

  const { getPost, updatePost, getById, post } = useContext(PostContext);
  //const { EditPost, getSinglePost } = useContext(PostContext);
  const [ editedPost, setEditedPost] = useState();
    const { categories, getAllCategories } = useContext(CategoryContext);
    const [userProfileId, setUserProfileId] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageLocation, setImageLocation] = useState("");
    const [createDateTime, setCreateDateTime] = useState("");
    const [categoryId, setCategoryId] = useState();


  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
      getById(parseInt(id));
  }, [])

  const handleFieldChange = (e) => {
    const stateToChange = { ...editedPost };
    stateToChange[e.target.id] = e.target.value;
    setEditedPost(stateToChange);
  }

  const handleChange = (e) => {
    setCategoryId(e.target.value);
  }

  useEffect(() => {
    getAllCategories()
  }, []);

  useEffect(() => {
    setEditedPost(post)
  }, [post]);

  const submitForm = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const editedPost = {
        id: post.id,
        title: editedPost.title,
        content: editedPost.content,
        imageLocation: editedPost.imageLocation,
        createDateTime: editedPost.createDateTime,
        publishDateTime: editedPost.publishDateTime,
        isApproved: editedPost.isApproved,
        categoryId,
        userProfileId: editedPost.userProfileId
    }

    const parseMyCats = parseInt(categoryId);
    editedPost.categoryId = parseMyCats;
    updatePost(editedPost.id, editedPost);
    history.push(`/post/edit/${id}`);

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

    updatePost(editedPost).then(() => history.push(`/post/${post.id}`));

  };

  useEffect(() => {
    getById(parseInt(id));
  }, [])

  if (!post) {
    return null;
  }

  return (
    <>
      <h1 className="mb-4">Posts</h1>
      <Form onSubmit={submitForm}>

        <FormGroup>
          <Label for="title">Title</Label>
          <Input type="text"
            id="title"
            defaultValue={editedPost.title}
            onChange={handleFieldChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="content">Content</Label>
          <Input type="textarea" rows="4"
            id="content"
            defaultValue={editedPost.content}
            onChange={handleFieldChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="imageLocation">Image</Label>
          <Input type="text"
            id="imageLocation"
            defaultValue={editedPost.imageLocation}
            onChange={handleFieldChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="categoryId">Category</Label>
          <select
            id="categoryId"
            onChange={handleChange}>
            {categories.map(e => (
              categories.id === post.categoryId ? // is it true? then do next...
              <option selected value={category.id}>
                  {category.name}
              </option> :  // !true then do this
              <option value={category.id}>
                  {category.name}
              </option>
            ))}
          </select>
        </FormGroup>

        {/* PUBLISH DATE ~~~~~~~~~~ */}
        {/* <FormGroup>
          <Label for="content">Publish Date</Label>
          <Input
              type="datetime-local"
              id="publishDateTime"
              required
              defaultValue={editedPost.publishDateTime}
              name="publishDateTime"
              onChange={handleFieldChange}
          />
      </FormGroup> */}

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
}
