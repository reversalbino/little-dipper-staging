import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import * as imageActions from '../../store/images';

export default function AddPost() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [file, setFile] = useState();
    const [imageTitle, setImageTitle] = useState('');

    async function AWSUpload() {
        if (!file) return window.alert('upload an image first');
		const formData = new FormData()

		formData.append('file', file)

		const res = await axios.post("/api/s3/upload/", formData);


		return res.data
    }

    async function postSubmit(e) {
        // const newImageUrl = await AWSUpload();
        // await AWSUpload();
        e.preventDefault();
        let url = await AWSUpload();

        const post = {
            postImageUrl: url,
            title: imageTitle
        }

        await dispatch(imageActions.addImage(post));

        history.push('/');
    }

    return (
        <div id='new-picture-div'>
            <form id='new-picture-form' onSubmit={postSubmit}>
                <img src={file ? file : null} alt='upload-preview' id='upload-preview' />
                {/* <label htmlFor='input-file'>File Input</label>
                <input type='file' hidden id='input-file' accept="image/*" onChange={(e) => setImage(() => e.target.files[0])} /> */}
                <div id='upload-div'>
                    <label htmlFor='img' id='select-file-button'>SELECT IMAGE</label>
                    <input type="file" id="img" name="img" accept="image/*"
                        // value={image?.name}
                        onChange={(e) => {
                            return setFile(e.target.files[0]);
                        }}
                    />
				</div>
                <input
                    type='text'
                    value={imageTitle}
                    onChange={(e) => setImageTitle(e.target.value)}
                    placeholder='Title'
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
