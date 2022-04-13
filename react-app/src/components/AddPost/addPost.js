import React, { useState } from 'react';
import axios from 'axios';

export default function AddPost() {
    const [file, setFile] = useState();
    const [imageTitle, setImageTitle] = useState('');
    let temp = 'https://little-dipper.s3.us-west-2.amazonaws.com/77D4569D-EF89-40FA-901F-AFD528AA59FC.jpeg';

    async function AWSUpload() {
        if (!file) return console.log('upload an image first');
		const formData = new FormData()

		formData.append('file', file)

		const res = await axios.post("/api/s3/upload/", formData);

        console.log('AWSUpload ~ response', res);

		return res.data
    }

    function handleChange(e) {
        setFile(e.target.files[0].name);
        AWSUpload();
    }

    async function postSubmit(e) {
        // const newImageUrl = await AWSUpload();
        // await AWSUpload();
        e.preventDefault();
        AWSUpload();
    }

    return (
        <div id='new-picture-div'>
            <form id='new-picture-form' onSubmit={postSubmit}>
                <img src={file ? file : null} alt='upload-preview' id='upload-preview' />
                {/* <label htmlFor='input-file'>File Input</label>
                <input type='file' hidden id='input-file' accept="image/*" onChange={(e) => setImage(() => e.target.files[0])} /> */}
                <div id='upload'>
                    <label htmlFor='img' id='select-file-button'>SELECT IMAGE</label>
                    <input type="file" id="img" name="img" accept="image/*"
                        // value={image?.name}
                        onChange={(e) => {
                            console.log(e.target.files[0]);
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
            {/* <img src={temp} alt='new' /> */}
        </div>
    )
}


//little-dipper
// AWS_ACCESS_KEY_ID=AKIAQWFV2KFM3DKOTNP4
// AWS_SECRET_ACCESS_KEY=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


//little-dipper-text-bucket
// AWS_ACCESS_KEY_ID=AKIAQWFV2KFM7DFGKAM5
// AWS_SECRET_ACCESS_KEY=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
