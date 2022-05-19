interface IPost {
  id: string;
  title: string;
  content: string;
  date: string;
}

import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type TPostsAction = ActionType<typeof actions>;

export type TPostsState = IPost[];
