//constants
const ADD_IMAGE = 'images/ADD_IMAGE';

const addPost = (post) => ({
    type: ADD_IMAGE,
    payload: post
});

export const addImage = post => async (dispatch) => {
    const response = await fetch('/api/images/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
}

export default function imagesReducer(state = { images: null }, action) {
    switch (action.type) {
      case ADD_IMAGE:
          return action.payload
      default:
        return state;
    }
  }
