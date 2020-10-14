import React from "react";
import { Badge } from "reactstrap";
import { Link } from "react-router-dom";


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
                onClick={() => tagToBeDeleted(tag)}>
                X
            </button>
            <Link to={`/tags/edit/${tags.id}`}>edit</Link>
        </div >
    );
};

export default Tag;
