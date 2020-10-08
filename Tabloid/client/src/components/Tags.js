import React, { useContext, useEffect } from "react";
import { TagContext } from "../providers/TagProvider";
import { ListGroup, ListGroupItem } from "reactstrap";
const Tags = () => {
    const { tags, getAllTags } = useContext(TagContext);

    useEffect(() => {
        getAllTags();
    }, []);

    return (
        <div>
            <h1>Tags</h1>
            {tags.map((tags) => (

                <div key={tags.id}>
                    <ListGroup>
                        <ListGroupItem>{tags.name}</ListGroupItem>
                    </ListGroup>

                </div>
            ))}
        </div>
    );
};

export default Tags;
