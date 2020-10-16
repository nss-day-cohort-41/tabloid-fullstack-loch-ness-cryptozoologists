import React, { useState, useContext, useEffect } from "react";
import { TagContext } from "../providers/TagProvider";
import { useParams, useHistory } from "react-router-dom";

export default function EditTagForm() {
    const { getTagById, editTag } = useContext(TagContext);
    const history = useHistory();
    const [tag, setTag] = useState({ id: "", Name: "" });
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = (e) => {
        const stateToChange = { ...tag };
        stateToChange[e.target.id] = e.target.value;
        setTag(stateToChange);
    }

    const updateExistingTag = e => {
        e.preventDefault()
        setIsLoading(true);
        const updatedTag = {
            name: tag.name,
            id: tag.id
        }
        console.log(updatedTag, "blue")
        editTag(updatedTag)
            .then(() => history.push("/tags"))
    }

    useEffect(() => {
        getTagById(id)
            .then(setTag)
        setIsLoading(false)
    }, []);
    if (!tag) {
        return null;
    }

    console.log(tag, "red")



    return (
        <div className="editForm">
            <div className="edit_content">
                <h1>Tag:</h1>
                <form>
                    <fieldset className="edit_fieldset">
                        Name:
                        <input
                            type="text"
                            className="edit_form"
                            onChange={handleFieldChange}
                            id="name"
                            value={tag.name} />
                        <label htmlFor="name"></label>
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={updateExistingTag}
                            className="editForm_button">
                            Edit
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}