import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as commentActions from '../../store/images';

export default function AddCommentForm({ post }) {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    const [commentContent, setCommentContent] = useState('');

    function addComment(e) {
        e.preventDefault();

        if(commentContent.length > 255) {
            window.alert('Comment must be 255 characters or less');
            return;
        }

        const comment = {
            userId: sessionUser.id,
            postId: post.id,
            content: commentContent
        }

        dispatch(commentActions.addCommentToPost(comment));
    }

    return(
        <div id='new-comment-form'>
            <form onSubmit={addComment}>
                <textarea
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                    placeholder='Insert new comment here'
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
