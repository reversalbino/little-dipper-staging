import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as commentActions from '../../store/images';
import './AddCommentForm.css';

export default function AddCommentForm({ post }) {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    const [commentContent, setCommentContent] = useState('');
    const [errors, setErrors] = useState([]);
    const [showErrors, setShowErrors] = useState(false);

    useEffect(() => {
        let tempErrors = [];

        if(commentContent === '') {
            tempErrors.push('Please enter a comment');
        }

        if(commentContent.length > 255) {
            tempErrors.push('Comment must be 255 characters or less');
        }

        setErrors(tempErrors)

    }, [commentContent]);

    function addComment(e) {
        e.preventDefault();

        if(errors.length > 0) {
            setShowErrors(true);
            return;
        }

        const comment = {
            userId: sessionUser.id,
            postId: post.id,
            content: commentContent
        }

        dispatch(commentActions.addCommentToPost(comment));
        setCommentContent('');

        setShowErrors(false);
    }

    return(
        <div id='new-comment-form'>
            {showErrors &&
                errors.map(error => <p id='error' key={error}>{error}</p>)
            }
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
