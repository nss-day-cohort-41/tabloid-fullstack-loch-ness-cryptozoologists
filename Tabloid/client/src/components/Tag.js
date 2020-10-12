import React from "react";
import { Badge } from "reactstrap";


const Tag = ({ tags, tagToBeDeleted, tagToBeEdited }) => {



    return (
        <div className="d-flex flex-wrap">
            <Badge color="primary"
                className="dh-badge m-1 pl-3 pr-3"
                value={tags.id}
                key={tags.id}>
                {tags.name}
            </Badge >
            <button
                className="x-button"
                onClick={() => tagToBeDeleted(tags)}>
                X
            </button>
            <button
                onClick={() => tagToBeEdited(tags)}
            >
                Edit
            </button>
        </div >
    );
};

export default Tag;
