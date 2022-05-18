//메인 화면에서 글쓰기 버튼을 클릭하면 새로 작성->확인 클릭시 디테일 화면에 매핑됨
//디테일 페이지에서 클릭하면 기존에 작성된 내용을 에디터 페이지로 불러오기+삭제

import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import getInputDate from '../src/hooks/getInputDate';
import useInput from '../src/hooks/useInput';
import { useRecoilState } from 'recoil';
import { PostListState } from '../src/recoil/recoil';
import { Container, Header } from '../src/GlobalStyle';

function EditorPage() {
  const router = useRouter();
  const navigateHome = () => router.push('/MainPage');
  const { inputText, onInputChange, reset } = useInput();
  /*
  {
    title: '',
    content: '',
    date: '',
    milisec: '',
  }, 나중에 타입으로 지정*/
  const [postList, setPostList] = useRecoilState(PostListState);

  const handleNewPost = (e) => {
    e.preventDefault();

    if (inputText) {
      const post = {
        title: inputText.title,
        content: inputText.content,
        date: getInputDate(),
        id: Date.now(),
      };

      setPostList((postList) => [...postList, post]);
      console.log(postList);
      reset();
    } else {
      alert('입력하세요!');
    }
    navigateHome();
  };

  return (
    <>
      <Container>
        <Header>블로그 글쓰기</Header>
        <Form>
          <InputWrapper>
            <Title
              type="text"
              name="title"
              value={inputText.title}
              onChange={onInputChange}
              placeholder="제목"
              spellCheck="false"
            />
            <Content
              type="text"
              name="content"
              value={inputText.content}
              onChange={onInputChange}
              placeholder="본문"
              spellCheck="false"
            />
          </InputWrapper>
          <PostingButton onClick={handleNewPost}>포스트 등록</PostingButton>
        </Form>
      </Container>
    </>
  );
}

export default EditorPage;

const Form = styled.form`
  padding: 10px;
`;
const PostingButton = styled.button`
  font-size: 15px;
`;
const Title = styled.textarea`
  font-size: 20px;
  border-bottom: 1px solid grey;
  padding: 5px;
`;
const Content = styled.textarea`
  font-size: 15px;
  border-bottom: 1px solid grey;
  padding: 5px;
  height: 300px;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
