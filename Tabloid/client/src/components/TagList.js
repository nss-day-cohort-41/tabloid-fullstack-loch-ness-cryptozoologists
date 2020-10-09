import React, { useContext, useEffect } from "react";
import { TagContext } from "../providers/TagProvider";
import { Badge } from "reactstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Tag from "./Tag";


const TagList = () => {
    const { tags, getAllTags } = useContext(TagContext);

    useEffect(() => {
        getAllTags();
    }, []);



    return (

        <div>
            <Link to={`/tags/add`}>
                <div className="dh-addTag">&#x2b;</div>
            </Link>
            <div className="row">
                {tags.map((tags) => (
                    <Tag key={tags.id} tags={tags} />
                ))}
            </div>
        </div>
    );
};

export default TagList;
