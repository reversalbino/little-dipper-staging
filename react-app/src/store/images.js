//constants
const LOAD_IMAGE = 'images/LOAD_IMAGE';
const LOAD_IMAGES = 'images/LOAD_IMAGES';
const ADD_IMAGE = 'images/ADD_IMAGE';
const REMOVE_IMAGE = 'images/REMOVE_IMAGE';
const EDIT_IMAGE = 'images/EDIT_IMAGE';

const loadImage = (image) => ({
    type: LOAD_IMAGE,
    payload: image
})

const loadImages = (images) => ({
    type: LOAD_IMAGES,
    payload: images
})

const addImagePost = (image) => ({
    type: ADD_IMAGE,
    payload: image
});

const removeImage = (imageId) => ({
    type: REMOVE_IMAGE,
    payload: imageId
});

const changePost = (editedPost) => ({
    type: EDIT_IMAGE,
    payload: editedPost
})

export const getImage = (id) => async (dispatch) => {
    const data = await fetch(`/api/images/${id}/`);

    if(data.ok) {
        const response = await data.json();
        dispatch(loadImage(response));
        return response;
    }
}

export const getImages = () => async (dispatch) => {
    const data = await fetch('/api/images/');

    if(data.ok) {
        const response = await data.json();
        console.log('getImages ~ response', response);

        dispatch(loadImages(response))
    }
}

export const addImage = post => async (dispatch) => {
    console.log(post);
    const data = await fetch('/api/images/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })

    if(data.ok) {
        const response = await data.json();

        dispatch(addImagePost(response));
        return response;
    }

    return 'COULDN\'T ADD POST';
}

export const deleteImage = id => async (dispatch) => {
    const data = await fetch(`/api/images/${id}/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(data.ok) {
        const deletedPostId = await data.json();
        dispatch(removeImage(deletedPostId));
    }
}

export const editImage = post => async (dispatch) => {
    const data = await fetch(`/api/images/${post.id}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    });

    if(data.ok) {
        const response = await data.json();
        dispatch(changePost(response))
    }
}

export default function imagesReducer(state = { images: {} }, action) {
    switch (action.type) {
        case LOAD_IMAGE: {
            const newState = { ...state };

            newState[action.payload.id] = action.payload;

            return newState;
        }
        case LOAD_IMAGES: {
            const newState = { ...state };

            for(let i = 0; i < action.payload.length; i++) {
                newState[action.payload[i].id] = action.payload[i];
            }

            return newState;
        }
        case ADD_IMAGE: {
            const newState = { ...state };
            // newState.images = { ...state.images };
            newState[action.payload.id] = action.payload;

            return newState;
        }
        case REMOVE_IMAGE: {
            const newState = { ...state };

            delete newState[action.payload];

            return newState;
        }
        case EDIT_IMAGE: {
            const newState = { ...state };
            newState[action.payload.id] = action.payload;

            return newState;
        }
      default:
            return state;
    }
}
