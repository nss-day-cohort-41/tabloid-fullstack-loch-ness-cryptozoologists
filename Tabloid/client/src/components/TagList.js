import React, { useContext, useEffect } from "react";
import { TagContext } from "../providers/TagProvider";
import { Badge } from "reactstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Tag from "./Tag";


const TagList = () => {
    const { tags, getAllTags, deleteTag, editTag } = useContext(TagContext);

    useEffect(() => {
        getAllTags();
    }, []);

    const tagToBeDeleted = (tag) => {
        console.log("delete function", tag)
        deleteTag(tag.id)
    }

    const tagToBeEdited = (tag) => {
        console.log("edit function", tag)
        editTag(tag)
    }

    return (

        <div>
            <Link to={`/tags/add`}>
                <div className="dh-addTag">&#x2b;</div>
            </Link>
            <div className="row">
                {tags.map((tags) => (
                    <Tag
                        key={tags.id}
                        tags={tags}
                        tagToBeDeleted={tagToBeDeleted}
                        tagToBeEdited={tagToBeEdited}
                    />
                ))}
            </div>
        </div>
    );
};

export default TagList;
