import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as imageActions from '../../store/images';
import './TagsSection.css';

export default function TagsSection({ tags, postId, sameUser }) {
    console.log('TagsSection ~ sameUser', sameUser);
    const sessionUser = useSelector(state => state.session.user);

    const dispatch = useDispatch();

    const [showButtons, setShowButtons] = useState(false);
    const [tagButtonsToShow, setTagButtonsToShow] = useState(-Infinity)

    function deleteImage(tagToDelete) {
        dispatch(imageActions.deleteTagFromPost(tagToDelete, postId))
    }

    return !(tags.length > 0) ?
        <p>
            No tags yet
        </p>

    :

        <ul id='tags-list'>
            {tags.map(tag => {
                return (
                    <li
                        key={tag.id}
                        onMouseEnter={() => {
                            if(sameUser) {
                                setShowButtons(true)
                                setTagButtonsToShow(tag.id)
                            }
                        }}
                        onMouseLeave={() => {
                            if(sameUser) {
                                setShowButtons(false)
                                setTagButtonsToShow(-Infinity)
                            }
                        }}
                        className='single-tag'
                    >
                        {tag.tag}
                        {(showButtons && tagButtonsToShow === tag.id) &&
                            <button id='delete-tag-button' onClick={() => deleteImage(tag)}>X</button>
                        }
                    </li>
                )
            })}
        </ul>

}
