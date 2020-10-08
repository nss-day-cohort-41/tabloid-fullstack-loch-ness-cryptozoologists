import React, { useContext, useEffect } from "react";
import { TagContext } from "../providers/TagProvider";
import { Badge } from "reactstrap";
const Tags = () => {
    const { tags, getAllTags } = useContext(TagContext);

    useEffect(() => {
        getAllTags();
    }, []);

    return (
        <div>
            <h1>Tags</h1>
            <div className="d-flex flex-wrap" key={tags.id}>
                {tags.map((tags) => (
                    <Badge color="primary" pill className="dh-badge m-1 pl-3 pr-3">{tags.name} <span className="xOut">&#10005;</span>
                    </Badge>
                ))}
            </div>
        </div>
    );
};

export default Tags;
