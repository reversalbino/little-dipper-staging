import React from 'react';
import { useSelector } from 'react-redux';

export default function CommentsList({ comments }) {
    const sessionUser = useSelector(state => state.session?.user);

    return !(comments.length > 0) ?

        <h1>Leave the first comment!</h1>

        :

        <ul>
            {comments.map(comment => {
                return <li key={comment.id}>{comment.content}</li>
            })}
        </ul>
}
