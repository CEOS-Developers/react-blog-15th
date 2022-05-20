import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import posts from './modules/postsSlice';

// https://velog.io/@danmin20/Next.js%EC%97%90%EC%84%9C-redux-toolkit-%EC%84%B8%ED%8C%85%ED%95%98%EA%B8%B0
const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }
  return combineReducers({ posts })(state, action);
};

const makeStore = () =>
  configureStore({
    reducer,
  });

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});

//export type RootState = ReturnType<typeof store.getState>;
//export type AppDispatch = typeof store.dispatch;
