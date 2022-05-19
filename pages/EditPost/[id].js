import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import getInputDate from '../../src/hooks/getInputDate';
import useInput from '../../src/hooks/useInput';
import { useRecoilState } from 'recoil';
import { PostListState } from '../../src/recoil/recoil';
import { Container, Header } from '../../src/GlobalStyle';
import useNavigateHome from '../../src/hooks/useNavigateHome';

function EditPost() {
  const { inputText, onInputChange, reset } = useInput();
  const [postList, setPostList] = useRecoilState(PostListState);
  const navigateHome = useNavigateHome();
  const router = useRouter();

  const { id } = router.query;
  const numbering = Number(id);
  const [postObj] = postList.filter((post) => post.id === numbering); //id를 이용해서 post filter

  const savedTitle = postObj.title;
  const savedContent = postObj.content;

  const handleNewPost = (e) => {
    e.preventDefault();

    if (inputText) {
      const post = {
        title: inputText.title,
        content: inputText.content,
        date: postObj.date,
        id: postObj.id,
      };

      setPostList((postList) => [
        ...postList.filter((item) => item.id !== postObj.id),
        post,
      ]);
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
              defaultValue={savedTitle}
              onChange={onInputChange}
              placeholder={savedTitle}
              spellCheck="false"
            />
            <Content
              type="text"
              name="content"
              defaultValue={savedContent}
              onChange={onInputChange}
              placeholder={savedContent}
              spellCheck="false"
            />
          </InputWrapper>
          <PostingButton onClick={handleNewPost}>포스트 등록</PostingButton>
        </Form>
      </Container>
    </>
  );
}

export default EditPost;

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
