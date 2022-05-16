import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as TagsActions from '../../store/images';

export default function AddTagForm({ tags, postId }) {
    const dispatch = useDispatch();

    const [tag, setTag] = useState('');
    const [errors, setErrors] = useState([]);
    const [showErrors, setShowErrors] = useState(false);

    useEffect(() => {
        let tempErrors = [];

        if(tag === '') {
            tempErrors.push('Please enter a tag');
        }

        if(tags.find(existingTag => existingTag.tag === tag)) {
            tempErrors.push('Tag already exists');
        }

        if(tag.length > 50) {
            tempErrors.push('Tag value must be 50 characters or less');
        }

        setErrors(tempErrors);
    }, [tag])

    async function addTag(e) {
        e.preventDefault();

        if(errors.length > 0) {
            setShowErrors(true);
            return;
        }

        await dispatch(TagsActions.addTagToPost(tag, postId));

        setShowErrors(false);
    }

    return (
        <form onSubmit={addTag} >
            <label for='tag-input'>Tag</label>
            <input
                id='tag-input'
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                placeholder='Add new tag'
            ></input>
            <button type='submit'>Add Tag</button>
        </form>
    )
}
