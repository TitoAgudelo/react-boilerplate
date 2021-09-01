import { createContext, useReducer, useContext, useState } from 'react';
import { types, postsReducer, initialState } from './state';
import { getPosts, getComments } from '../../hooks/usePosts';

export const PostsStateContext = createContext();
export const PostsSetContext = createContext();

export const useStatePosts = () => useContext(PostsStateContext);
export const useSetPosts = () => useContext(PostsSetContext);

const PostsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, initialState);

  const initPosts = async () => {
    const posts = await getPosts();
    dispatch({ type: types.SET_POSTS, payload: posts });
    initComments();
  };

  const initComments = async () => {
    const comments = await getComments();
    dispatch({ type: types.SET_COMMENTS, payload: comments });
  };

  return (
    <PostsStateContext.Provider value={state}>
      <PostsSetContext.Provider
        value={{initPosts, initComments}}>
        {children}
      </PostsSetContext.Provider>
    </PostsStateContext.Provider>
  );
};

export default PostsProvider;
