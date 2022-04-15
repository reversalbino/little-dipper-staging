import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function SinglePostPage() {
    const { id } = useParams();
    console.log('SinglePostPage ~ postId', id);
    // const post = useSelector(state => state)

    return (
        <h1>{id}</h1>
    )
}
