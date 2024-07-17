import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name : "연동1",
        comment: "화난다1",
    },
    {
        name : "연동2",
        comment: "화난다2",
        },
    {
        name : "연동3",
        comment: "화난다3",
    },
];


function CommentList(props){
    return (
        <div>
        {comments.map((comment) => {
            return (
                <Comment name={comment.name} comment={comment.comment}></Comment>
            );
         })}
        </div>
    );
}

export default CommentList;