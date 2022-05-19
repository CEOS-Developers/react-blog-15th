import { createReducer } from 'typesafe-actions';
import { ADD_POST, UPDATE_POST, REMOVE_POST } from './actions';
import { TPostsAction, TPostsState } from './types';

const initialState: TPostsState = [
  {
    id: '1',
    title: 'title1',
    content: 'content1',
    date: '05-18 12:00',
  },
  {
    id: '2',
    title: 'title2',
    content: 'content2',
    date: '05-17 09:30',
  },
  {
    id: '3',
    title: 'title3',
    content: 'content3',
    date: '05-19 21:00',
  },
  {
    id: '4',
    title: 'title3',
    content: 'content3',
    date: '05-17 11:11',
  },
  {
    id: '5',
    title: 'title3',
    content: 'content3',
    date: '05-16 21:00',
  },
];

export const posts = createReducer<TPostsState, TPostsAction>(initialState, {
  [ADD_POST]: (state, { payload: postToAdd }) => {
    console.log('ADD_POST');
    return state.concat(postToAdd);
  },
  [UPDATE_POST]: (state, { payload: postToUpdate }) => {
    console.log('UPDATE_POST');
    const temp = state.filter((post) => post.id !== postToUpdate.id);
    return temp.concat(postToUpdate);
  },
  [REMOVE_POST]: (state, { payload: idToRemove }) => {
    console.log('REMOVE_POST');
    return state.filter((post) => post.id !== idToRemove);
  },
});
