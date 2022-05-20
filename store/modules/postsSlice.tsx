import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost, IPosts } from 'shared/interfaces';
import { posts as postsData } from '../../assets/json/posts.json';

export type TPostsState = IPosts;

const initialState: TPostsState = postsData;

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<IPost>) => {
      console.log('addPost');
      const nextPostId = (
        Math.max(...state.map((post) => parseInt(post.postId))) + 1
      ).toString();
      const newPost: IPost = {
        postId: nextPostId,
        title: action.payload.title,
        content: action.payload.content,
        date: action.payload.date,
      };
      return state.concat(newPost);
    },
    updatePost: (state, action: PayloadAction<IPost>) => {
      console.log('updatePost');
      const temp = state.filter(
        (post) => post.postId !== action.payload.postId
      );
      return temp.concat(action.payload);
    },
    removePost: (state, action: PayloadAction<string>) => {
      console.log('removePost');
      return state.filter((post) => post.postId !== action.payload);
    },
  },
});

export const { addPost, updatePost, removePost } = postsSlice.actions;
export default postsSlice.reducer;
