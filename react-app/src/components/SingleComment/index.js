import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as imageActions from '../../store/images';
import defaultProfileImage from '../../static/default-profile-image.png';
import './SingleComment.css'

export default function SingleComment({ comment }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const [newComment, setNewComment] = useState(comment.content);
    const [editComment, setEditComment] = useState(false);

    function deleteComment() {
        dispatch(imageActions.deletePostComment(comment));
    }

    function submitEditedComment(e) {
        e.preventDefault();

        const editedComment = { ...comment };
        editedComment.content = newComment;

        dispatch(imageActions.editPostComment(editedComment))
        setEditComment(false);
    }

    return editComment ?

    <div id='single-comment'>
        <form onSubmit={submitEditedComment}>
            <input
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
            />
            <button type='button' onClick={() => setEditComment(false)}>Cancel</button>
            <button type='submit'>Submit</button>
        </form>
    </div>

    :

    <div className='single-comment'>
        <img src={comment.user.profileImageUrl === '/default-profile-image.png' ? defaultProfileImage : comment.user.profileImageUrl} alt={comment.user.username} />
        <p>{comment.content}</p>
        {sessionUser.id === comment.userId &&
            <div id='edit-and-delete-comment-buttons'>
                <button type='button' onClick={deleteComment}>Delete</button>
                <button type='button' onClick={() => setEditComment(true)}>Edit</button>
            </div>
        }
    </div>
}
