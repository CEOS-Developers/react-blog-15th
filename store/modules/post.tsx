import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface IPost {
  id: string;
  title: string;
  content: string;
  date: string;
}

interface IPostState {
  posts: IPost[];
}

const initialState = {
  posts: [
    {
      id: "1",
      title: "default title",
      content: "default content",
      date: "2022-05-17 18:00",
    },
  ],
} as IPostState; // 초기 상태 값

const postSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<IPost>) => {
      state.posts = [...state.posts, action.payload];
    },
    updatePost: (state, action: PayloadAction<IPost>) => {
      state.posts.splice(
        state.posts.findIndex((post) => post.id === action.payload.id),
        1
      );
      state.posts = [...state.posts, action.payload];
    },
    deletePost(state, action: PayloadAction<string>) {
      state.posts.splice(
        state.posts.findIndex((post) => post.id === action.payload),
        1
      );
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.subject,
      };
    },
  },
});

export const { addPost, updatePost, deletePost } = postSlice.actions;
export default postSlice.reducer; // 리듀서
