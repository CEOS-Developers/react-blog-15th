import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import getInputDate from '../../src/hooks/getInputDate';
import useInput from '../../src/hooks/useInput';
import { useRecoilState } from 'recoil';
import { PostListState } from '../../src/recoil/recoil';
import { Container, Header } from '../../src/GlobalStyle';

function EditPost() {
  const { onInputChange, reset } = useInput();
  const router = useRouter();
  const navigateHome = () => router.push('/MainPage');

  const [postList, setPostList] = useRecoilState(PostListState);

  const { id } = router.query;
  const numbering = Number(id);
  const [postObj] = postList.filter((post) => post.id === numbering); //id를 이용해서 post filter

  const savedTitle = postObj?.title;
  const savedContent = postObj?.content;
  const [inputText, setInputText] = useState({
    title: savedTitle,
    content: savedContent,
  });

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
              value={inputText.title}
              onChange={onInputChange}
              placeholder={savedTitle}
              spellCheck="false"
            />
            <Content
              type="text"
              name="content"
              value={inputText.content}
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
