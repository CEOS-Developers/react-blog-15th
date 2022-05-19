import { createReducer } from 'typesafe-actions';
import { ADD_POST, UPDATE_POST, REMOVE_POST } from './actions';
import { TPostsAction, TPostsState } from './types';
import { posts as postsData } from '../../assets/json/posts.json';

const initialState: TPostsState = postsData;

export const posts = createReducer<TPostsState, TPostsAction>(initialState, {
  [ADD_POST]: (state, { payload: postToAdd }) => {
    console.log('ADD_POST');
    return state.concat(postToAdd);
  },
  [UPDATE_POST]: (state, { payload: postToUpdate }) => {
    console.log('UPDATE_POST');
    const temp = state.filter((post) => post.postId !== postToUpdate.postId);
    return temp.concat(postToUpdate);
  },
  [REMOVE_POST]: (state, { payload: idToRemove }) => {
    console.log('REMOVE_POST');
    return state.filter((post) => post.postId !== idToRemove);
  },
});
