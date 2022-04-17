import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';

import * as imageActions from '../../store/images';
import LoadingAnimation from '../LoadingAnimation';
import './SinglePostPage.css';
import defaultProfileImage from '../../static/default-profile-image.png';

export default function SinglePostPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const post = useSelector(state => state?.images[+id]);
    const sessionUser = useSelector(state => state.session.user)

    useEffect(() => {
        (async () => {
            await dispatch(imageActions.getImage(+id));
            // if(!image) {
            //     history.push('/404');
            // }
            setIsLoaded(true);
        })()
    }, []);

    async function deletePost() {
        setIsLoaded(false);
        if(post.user.id !== sessionUser.id) {
            return;
        }
        await dispatch(imageActions.deleteImage(post.id));
        return history.push('/');
    }

    if(isLoaded && !post) {
        history.push('/');
    }

    return !isLoaded ?
        <LoadingAnimation />

        :

        <div id='single-post'>
            <div id='image-div'>
                <img src={post?.postImageUrl} alt={post.title} id='image' />
            </div>
            <div id='post-information'>
                <div id='post-user-profile-image-div'>
                    <img src={post?.user?.profileImageUrl === '/default-profile-image.png' ? defaultProfileImage : post.user.profileImageUrl} alt='user' id='user-profile-image'/>
                </div>
                <div id='post-information-text'>
                    <h1>{post.title} by <Link to={`/users/${post.user.id}`}>{post.user?.username}</Link></h1>
                </div>
                {sessionUser.id === post.user.id &&
                    <button onClick={() => deletePost()}>Delete</button>
                }
            </div>
        </div>
}
