import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as imageActions from '../../store/images'
import './FeedPage.css';

export default function FeedPage() {
    const dispatch = useDispatch();
    let images = useSelector(state => Object.values(state.images));
    console.log('FeedPage ~ images', images);

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            await dispatch(imageActions.getImages());
            setIsLoaded(true);
        })()
    }, []);

    return !isLoaded ?
        <h1>LOADING</h1>

        :

        <>
            {images.map(image => {
                return image.id && <img key={image.id} src={image.postImageUrl} alt='something goes here' />
            })}
        </>
}
