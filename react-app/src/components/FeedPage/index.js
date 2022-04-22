import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import * as imageActions from '../../store/images';
import LoadingAnimation from '../LoadingAnimation';
// import PostModal from '../PostModal/PostModal';
import './FeedPage.css';

export default function FeedPage() {
    const dispatch = useDispatch();
    let images = useSelector(state => Object.values(state.images).filter(image => 'id' in image));

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            await dispatch(imageActions.getImages());
            setIsLoaded(true);
        })()
    }, []);

    return !isLoaded ?
        <LoadingAnimation />

        :

        <>
            {images.length > 0 ?
                images?.map(image => {
                    return image.id && (
                        <div className='single-feed-post' key={image?.id}>
                            <Link to={`/pictures/${image?.id}`}>
                                <img src={image?.postImageUrl} alt='something goes here' />
                            </Link>
                        </div>
                    )
                })

            :

                <h1>No posts found</h1>
            }
        </>
}
