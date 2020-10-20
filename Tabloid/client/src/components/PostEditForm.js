import React, { useState, useContext, useEffect } from "react";
import { PostContext } from "../providers/PostProvider";
import { CategoryContext } from "../providers/CategoryProvider";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory, Link, useParams } from "react-router-dom";
export default function PostEditForm() {

  const { getById, updatePost, post } = useContext(PostContext);
  //const { EditPost, getSinglePost } = useContext(PostContext);
  const [ editedPost, setEditedPost] = useState();
  const { categories, getAllCategories } = useContext(CategoryContext);
  /* const [userProfileId, setUserProfileId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageLocation, setImageLocation] = useState("");
  const [createDateTime, setCreateDateTime] = useState(""); */
  const [categoryId, setCategoryId] = useState();


  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    setCategoryId(e.target.value);
  }

  useEffect(() => {
    getById(parseInt(id));
  }, [])

  useEffect(() => {
    getAllCategories()
  }, []);

  useEffect(() => {
    setEditedPost(post)
  }, [post]);

  const submitForm = (e) => {
    e.preventDefault();
    setIsLoading(true);

    updatePost({
        id: post.id,
        title: editedPost.title,
        content: editedPost.content,
        imageLocation: editedPost.imageLocation,
        //createDateTime: editedPost.createDateTime,
        publishDateTime: editedPost.publishDateTime,
        //isApproved: editedPost.isApproved,
        //categoryId,
        //userProfileId: editedPost.userProfileId
    })

    const parseMyCats = parseInt(categoryId);
    editedPost.categoryId = parseMyCats;
    updatePost(editedPost.id, editedPost);
    history.push(`/post/edit/${id}`);

  }

  const handleFieldChange = e => {
    const stateToChange = { ...editedPost };
    stateToChange[e.target.id] = e.target.value;
    setEditedPost(stateToChange);
  }

  if (!editedPost) {
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
          <select className="userEditDropdown" onChange={handleChange}>
            {categories.map(category =>
                category.id === post.categoryId ?
                <option selected value={category.id}>
                    {category.name}
                </option> :
                <option value={category.id}>
                    {category.name}
                </option>
            )}
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
