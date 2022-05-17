import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface exampleState {
  value: number;
}

const initialState = { value: 0 } as exampleState; // 초기 상태 값

const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    simpleReducer: (state) => {
      console.log(state.value); // 단순 상태 조작/출력
    },
    functionReducer(state, action: PayloadAction<number>) {
      state.value += action.payload; // argument 토대로 상태 수정
      // PayloadAction 안 <> 인자는 payload의 타입
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

export const { simpleReducer, functionReducer } = sampleSlice.actions; // 액션 생성함수
export default sampleSlice.reducer; // 리듀서
