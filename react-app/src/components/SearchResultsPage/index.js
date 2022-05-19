import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import LoadingAnimation from '../LoadingAnimation';
import * as imageActions from '../../store/images';

export default function SearchResultsPage() {
    const dispatch = useDispatch();

    const { query } = useParams();

    const [isLoaded, setIsLoaded] = useState(false)

    const searchResults = Object.values(useSelector(state => state.images));

    useEffect(() => {
        (function() {
            dispatch(imageActions.searchForPosts(query));
            setIsLoaded(true);
        })()
    }, [query])

    return !isLoaded ? <LoadingAnimation /> : (
        <div id='search-results'>
            <h1>Search results for {query}</h1>
            {
                searchResults.length > 0 ?
                    <div id='feed-images'>
                        {searchResults?.map(image => {
                            return image.id && (
                                <div className='single-feed-post' key={image?.id}>
                                    <Link to={`/pictures/${image?.id}`}>
                                        <img src={image?.postImageUrl} alt='something goes here' className='feed-post-image'/>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>

            :

                <h1>No results found</h1>
            }
        </div>
    )
}
