import useInput from '../hooks/useInput';
import { useRecoilState } from 'recoil';
import { PostListState } from '../recoil/recoil';
import { Container, Header, CenteringWrapper } from '../GlobalStyle';
import useNavigateHome from '../hooks/useNavigateHome';
import {
  Form,
  PostHandleButton,
  Title,
  Content,
  InputWrapper,
} from '../styles/EditorStyle';
import getInputDate from '../hooks/getInputDate';
import useRouting from '../hooks/useRouting';
import React from 'react';

function EditorContainer() {
  const { inputText, onInputChange, reset } = useInput();
  const [postList, setPostList] = useRecoilState(PostListState);

  const navigateHome = useNavigateHome();
  const numbering = useRouting();

  const [postObj] = postList.filter((post) => post.postNum === numbering);

  const savedTitle = numbering ? postObj.title : '';
  const savedContent = numbering ? postObj.content : '';
  const newDate = getInputDate();

  const handleNewPost = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (
      numbering
        ? inputText.title != '' || inputText.content != ''
        : inputText.title != '' && inputText.content != ''
    ) {
      if (numbering && inputText.title == '') {
        inputText.title = savedTitle;
      }
      if (numbering && inputText.content == '') {
        inputText.content = savedContent;
      }

      const post = {
        postNum: numbering ? numbering : postList.length + 1,
        title: inputText.title,
        content: inputText.content,
        date: numbering ? postObj.date : newDate,
        id: numbering ? postObj.id : Date.now(),
      };

      const newArray = [...postList];
      newArray.splice(numbering - 1, 1, post); //포스트 수정
      setPostList(numbering ? newArray : (postList) => [...postList, post]); //포스트 수정,포스트 등록
      navigateHome();
      reset();
    } else {
      alert('입력하세요!');
    }
  };

  return (
    <CenteringWrapper>
      <Header>{numbering ? '글 수정하기' : '글 등록하기'}</Header>
      <Container>
        <Form>
          <InputWrapper>
            <Title
              name="title"
              defaultValue={savedTitle}
              onChange={onInputChange}
              spellCheck="false"
            />
            <Content
              name="content"
              defaultValue={savedContent}
              onChange={onInputChange}
              spellCheck="false"
            />
          </InputWrapper>
          <PostHandleButton onClick={handleNewPost}>
            {numbering ? '포스트 수정' : '포스트 등록'}
          </PostHandleButton>
        </Form>
      </Container>
    </CenteringWrapper>
  );
}

export default EditorContainer;
