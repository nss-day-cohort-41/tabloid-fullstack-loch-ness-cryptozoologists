import React from "react";
import { Badge } from "reactstrap";


const Tag = ({ tags }) => {



    return (
        <div className="d-flex flex-wrap">
            <Badge color="primary"
                className="dh-badge m-1 pl-3 pr-3"
                value={tags.id}
                key={tags.id}>
                {tags.name}
                <span className="xOut">&#10005;</span>
            </Badge>
        </div>
    );
};

export default Tag;
