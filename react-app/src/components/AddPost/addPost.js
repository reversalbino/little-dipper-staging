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
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const [showErrors, setShowErrors] = useState(false);

    useEffect(() => {
        let tempErrors = [];

        if(imageTitle !== undefined && imageTitle.length === 0) {
            tempErrors.push('Please provide a title');
        }
        if(imageTitle !== undefined && imageTitle.length > 50) {
            tempErrors.push('Title must be 50 characters or less');
        }
        if(!file) {
            tempErrors.push('Please provide an image');
        }

        setErrors(tempErrors);

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

        if(errors.length) {
            setShowErrors(true);
            return;
        }

        setIsLoading(true);

        let url = await AWSUpload();

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
                {(errors.length > 0 && showErrors) &&
                    <div className='submit-error'>
                        {errors.map(error => <p key={error}>{error}</p>)}
                    </div>
                }
                <button
                    type='submit'
                    // disabled={errors.length > 0}
                >Submit</button>
            </form>
        </div>
    )
}
