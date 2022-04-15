import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import * as imageActions from '../../store/images';

export default function SinglePostPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            await dispatch(imageActions.getImage(+id));
            setIsLoaded(true);
        })()
    }, []);

    return (
        <h1>{id}</h1>
    )
}
