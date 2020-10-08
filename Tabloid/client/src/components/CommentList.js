import React, { useContext, UseEffect } from "react";
import { CommentContext } from "..providers/CommentProvider";

const CommentList = () => {
    const { comment, GetAllComments } = useContext(PostContext);

    useEffect(() => {
        getAllComments();
    }, []);

    return (
        <section>
            {CommentList.map(comment =>
                <Comment key={comment.id} comment={comment} />
            )}
        </section>
    )
}
export default CommentList;