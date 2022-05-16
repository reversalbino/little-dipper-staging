import React from 'react';

export default function TagsSection({ tags }) {
    return !(tags.length > 0) ?
        <p>
            No tags yet
        </p>

    :

        <ul>
            {tags.map(tag => {
                return <li key={tag.id}>{tag.tag}</li>
            })}
        </ul>

}
