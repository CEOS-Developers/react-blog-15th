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
      date: "05-17 18:00",
    },
  ],
} as IPostState;

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<IPost>) => {
      state.posts = [...state.posts, action.payload];
    },
    updatePost: (state, action: PayloadAction<IPost>) => {
      state.posts = [
        ...state.posts.filter((post) => post.id !== action.payload.id),
        action.payload,
      ];
    },
    deletePost(state, action: PayloadAction<string>) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
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
export default postSlice.reducer;
