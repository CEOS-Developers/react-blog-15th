import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { PostListState } from '../../src/recoil/recoil';
import Link from 'next/link';
import {EditorPage} from "../EditorPage";
import {TestPage} from './TestPage';
import styled from 'styled-components';
import useInput from '../src/hooks/useInput';
import getInputDate from '../src/hooks/getInputDate';


function ModifiedContainer(){

    const router = useRouter();
    const { id } = router.query;
    const numbering = Number(id);

    const currentPostList = useRecoilValue(PostListState);
    const [postObj] = currentPostList.filter((post) => post.id === numbering); //id를 이용해서 post filter

    const { inputText, onInputChange, reset } = useInput();
  /*
  {
    title: '',
    content: '',
    date: '',
    milisec: '',
  }, 나중에 타입으로 지정*/

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
  };


    return(
        <>
    <Container>
        <Header>블로그 수정하기</Header>
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


export default ModifiedContainer;