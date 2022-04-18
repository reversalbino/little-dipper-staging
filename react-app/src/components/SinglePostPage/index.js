import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';

import * as imageActions from '../../store/images';
import LoadingAnimation from '../LoadingAnimation';
import './SinglePostPage.css';
import defaultProfileImage from '../../static/default-profile-image.png';
import CommentsSection from '../CommentsSection';

export default function SinglePostPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const post = useSelector(state => state?.images[+id]);
    const sessionUser = useSelector(state => state.session.user)

    const [isLoaded, setIsLoaded] = useState(false);
    const [editPost, setEditPost] = useState(false);
    const [newTitle, setNewTitle] = useState('');

    useEffect(() => {
        (async () => {
            await dispatch(imageActions.getImage(+id));
            // if(!image) {
            //     history.push('/404');
            // }
            setIsLoaded(true);
        })()
    }, [dispatch, id]);

    async function saveNewTitle() {
        if(newTitle.length > 50) {
            window.alert('Title must be 50 characters or less');
            setNewTitle(post?.title);
            return;
        }

        const editedPost = {
            id: post?.id,
            title: newTitle
        }

        await dispatch(imageActions.editImage(editedPost));
    }

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
                    {editPost ?
                        <input
                            type='text'
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            // placeholder={post.title}
                        />

                    :
                        <h1>
                            {post?.title}
                        </h1>
                    }
                    <h1>&nbsp;by <Link to={`/users/${post.user.id}`}>{post.user?.username}</Link></h1>
                </div>
                {sessionUser.id === post.user.id &&
                    <div id='edit-and-delete-buttons'>
                        <button onClick={() => deletePost()} id='delete-button'>Delete</button>
                        {!editPost && <button onClick={() => setEditPost(true)} id='edit-button'>Edit</button>}
                        {editPost &&
                            <button
                                onClick={() => {
                                    setEditPost(false);
                                    saveNewTitle();
                                }}
                                id='edit-button'
                            >
                                Save
                            </button>}
                    </div>
                }
            </div>
            <CommentsSection />
        </div>
}
