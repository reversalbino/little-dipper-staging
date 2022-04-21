import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SingleComment from '../SingleComment';
import * as commentActions from '../../store/images';

export default function CommentsList({ comments }) {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session?.user);

    return !(comments.length > 0) ?

        <h1>Leave the first comment!</h1>

        :

        <ul>
            {comments.map(comment => {
                return (
                    <SingleComment key={comment.id} comment={comment} />
                )
            })}
        </ul>
}
