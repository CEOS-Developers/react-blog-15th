import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { IPost, IPostState } from "../types";

const initialState = {
  posts: [
    {
      id: "1",
      title: "default title",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae culpa nesciunt quae nihil, voluptas ab tempora ratione earum debitis quibusdam.",
      date: "05-17 18:00",
    },
    {
      id: "2",
      title: "default title",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum exercitationem rerum ex reprehenderit excepturi dolor perferendis nam eos. Quos, voluptatem amet adipisci corporis illo error maxime nisi fuga vitae, blanditiis voluptate. Consectetur numquam quidem repellat, optio ipsa odio aspernatur deserunt mollitia praesentium ullam ea, labore at sunt veritatis doloribus quasi.",
      date: "05-17 19:00",
    },
    {
      id: "3",
      title: "default title",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo nesciunt commodi recusandae error, beatae iure, quia libero sint qui esse neque cupiditate. Quam eveniet iste, cumque ratione, accusamus iure facere ipsam a dignissimos quod ea illum labore pariatur? Praesentium pariatur non natus sint voluptatem veniam delectus explicabo harum fuga! Amet recusandae magni ducimus in voluptate, natus ipsam voluptatum non quibusdam obcaecati, facilis molestiae nemo architecto esse labore similique molestias perferendis fugiat rem error voluptates quia magnam, nulla cupiditate. Voluptate similique, eum molestiae repudiandae aspernatur quo accusamus non officiis veritatis cupiditate sed autem facere quia sapiente dolorum quam neque ea amet?",
      date: "05-17 20:00",
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
        ...action.payload,
        ...state,
      };
    },
  },
});

export const { addPost, updatePost, deletePost } = postSlice.actions;
export default postSlice.reducer;
