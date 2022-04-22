import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import * as imageActions from '../../store/images';
import LoadingAnimation from '../LoadingAnimation';
import './addPost.css';

export default function AddPost() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [file, setFile] = useState();
    const [imageTitle, setImageTitle] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(file && imageTitle.length > 0) {
            setIsDisabled(false);
        }
        else {
            setIsDisabled(true);
        }
    }, [imageTitle, file])

    async function AWSUpload() {
        if (!file) return window.alert('upload an image first');
		const formData = new FormData()

		formData.append('file', file)

		const res = await axios.post("/api/s3/upload/", formData);


		return res.data
    }

    async function postSubmit(e) {
        e.preventDefault();

        setIsLoading(true);

        let url = await AWSUpload();

        if(imageTitle.length > 50) {
            window.alert('Title must be 50 characters or less');
            return;
        }

        if(imageTitle.length === 0) {
            window.alert('Please provide a title');
        }

        const post = {
            postImageUrl: url,
            title: imageTitle
        }

        await dispatch(imageActions.addImage(post));

        history.push('/');
    }

    return isLoading ? <LoadingAnimation /> : (
        <div id='new-picture-div'>
            <div id='preview-div'>
                {file ? <img src={URL.createObjectURL(file)} alt='upload-preview' id='upload-preview' /> : <h1 id='upload-file'>Upload a file...</h1>}
            </div>
            <form id='new-picture-form' onSubmit={postSubmit}>
                {/* <label htmlFor='input-file'>File Input</label>
                <input type='file' hidden id='input-file' accept="image/*" onChange={(e) => setImage(() => e.target.files[0])} /> */}
                <div id='upload-div'>
                    <button type='button' id='select-file-button'><label htmlFor='img'>Select Image</label></button>
                    <input type="file" id="img" name="img" accept="image/*"
                        // value={image?.name}
                        onChange={(e) => {
                            return setFile(e.target.files[0]);
                        }}
                        hidden
                    />
				</div>
                <input
                    type='text'
                    value={imageTitle}
                    onChange={(e) => setImageTitle(e.target.value)}
                    id='post-title'
                    placeholder='Title'
                />
                <button
                    type='submit'
                    disabled={isDisabled}
                >Submit</button>
            </form>
        </div>
    )
}
