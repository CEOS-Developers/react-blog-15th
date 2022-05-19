interface IPost {
  id: string;
  title: string;
  content: string;
  date: string;
}

import { createAction } from 'typesafe-actions';

export const ADD_POST = 'posts/ADD';
export const UPDATE_POST = 'posts/UPDATE';
export const REMOVE_POST = 'posts/DELETE';

export const addNewPost = createAction(ADD_POST)<IPost>();
export const updatePost = createAction(UPDATE_POST)<IPost>();
export const removePost = createAction(REMOVE_POST)<string>();
