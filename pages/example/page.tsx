import type { NextPage } from "next";
import styled from "styled-components";
import Link from "next/link";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  functionReducer,
  simpleReducer,
} from "../../store/modules/sampleReducer";

const page: NextPage = () => {
  const dispatch = useAppDispatch(); // action dispatch 함수
  const value = useAppSelector((state) => state.example.value); // state 조회 함수 (state.[slice name].[state key])

  return (
    <Div>
      <div>{value}</div>
      <div>
        <button
          onClick={() => {
            dispatch(functionReducer(1)); // 액션 생성 함수 리턴값 dispatch
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            dispatch(functionReducer(-1));
          }}
        >
          decrement
        </button>
        <button
          onClick={() => {
            dispatch(simpleReducer());
          }}
        >
          console
        </button>
      </div>

      <Link href={`/`}>
        <a>{"메인 페이지로 링크"}</a>
      </Link>
    </Div>
  );
};

export default page;

const Div = styled.div`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
