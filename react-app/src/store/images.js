//constants
const ADD_IMAGE = 'images/ADD_IMAGE';

const addImagePost = (image) => ({
    type: ADD_IMAGE,
    payload: image
});

export const addImage = post => async (dispatch) => {
    const response = await fetch('/api/images/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })

    const res = response.json();
    console.log('addImage ~ res', res);

    dispatch(addImagePost(res));
    return res;
}

export default function imagesReducer(state = { images: {} }, action) {
    switch (action.type) {
        case ADD_IMAGE:
            let newState = { ...state };
            newState.images = { ...state.images };
            newState[action.image.id] = action.image;
            return newState;
      default:
            return state;
    }
}
