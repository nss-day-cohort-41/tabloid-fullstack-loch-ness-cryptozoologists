import React, { useContext, useEffect } from "react";
import { TagContext } from "../providers/TagProvider";
import { Link } from "react-router-dom";
import Tags from "./Tag";


const TagList = () => {
    const { tags, getAllTags, deleteTag, getTagById } = useContext(TagContext);

    useEffect(() => {
        getAllTags();
    }, []);

    const tagToBeDeleted = (tags) => {
        deleteTag(tags.id)
    }

    const tagToBeEdited = (tags) => {
        getTagById(tags.id)
    }

    return (

        <div>
            <Link to={`/tags/add`}>
                <div className="dh-addTag">&#x2b;</div>
            </Link>
            <div className="row">
                {tags.map((tags) => (
                    <Tags
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
