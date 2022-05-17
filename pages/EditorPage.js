//메인 화면에서 글쓰기 버튼을 클릭하면 새로 작성->확인 클릭시 디테일 화면에 매핑됨
//디테일 페이지에서 클릭하면 기존에 작성된 내용을 에디터 페이지로 불러오기+삭제

import { useState } from 'react';
import styled from 'styled-components';
import getInputDate from '../src/hooks/getInputDate';
import useInput from '../src/hooks/useInput';
import data from '../src/data/data.json';
import { useRecoilState } from 'recoil';
import { PostListState } from '../src/recoil/recoil';

function EditorPage() {
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
        id: postList.length,
        title: inputText.title,
        content: inputText.content,
        date: getInputDate(),
        milisec: Date.now().toString(),
      };

      setPostList(postList => [...postList,post]);
      console.log(postList);
      reset();
    }
  };

  return (
    <>
      <Container>
        <Header>블로그 글쓰기</Header>
        <Form>
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
          <PostingButton onClick={handleNewPost}>포스트 등록</PostingButton>
        </Form>
      </Container>
    </>
  );
}

export default EditorPage;

const Container = styled.div`
    
width : 1000px;
margin 0 auto;
`;
const Header = styled.header`
  font-size: 30px;
`;

const Form = styled.form`
  padding: 10px;
`;
const PostingButton = styled.button`
  font-size: 15px;
`;
const Title = styled.input`
  font-size: 15px;
  border-bottom: 1px solid grey;
  padding: 5px;
`;
const Content = styled.input`
  font-size: 15px;
  border-bottom: 1px solid grey;
  padding: 5px;
`;
