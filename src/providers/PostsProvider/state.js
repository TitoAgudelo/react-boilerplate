export const types = {
  SET_POSTS: 'SET_POSTS',
  SET_COMMENTS: 'SET_COMMENTS'
};

export const initialState = {
  posts: [],
  originalPosts: [],
  comments: [],
  originalComments: []
};

export const postsReducer = (state, action) => {
  return action.type === types.SET_POSTS
    ? { ...state, posts: action.payload, originalPosts: action.payload }
    : action.type === types.SET_COMMENTS
    ? { ...state, comments: action.payload, originalComments: action.payload }
    : state;
};
