import { useRouter } from 'next/router';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { PostListState } from '../../src/recoil/recoil';
import Link from 'next/link';
import {EditorPage} from "../EditorPage";
import styled from 'styled-components';
import {Container,Header} from '../../src/GlobalStyle';
import {Form,PostingButton,Title,Content,InputWrapper} from '../EditorPage';
import {useState} from 'react';
function ModifiedContainer(){

    const router = useRouter();
    const { id } = router.query;
    const numbering = Number(id);

    const currentPostList = useRecoilValue(PostListState);
    const modifyPost = useSetRecoilState(PostListState);
    
    const [postObj] = currentPostList.filter((post) => post.id === numbering); //id를 이용해서 post filter

      const [inputText, setInputText] = useState({
        title: '',
        content: '',
      });
    
      const onInputChange = (e) => {
        setInputText({...inputText,[e.target.name]: e.target.value });
      };
    
      const reset = () => {
        setInputText({title:'', content: ''});
      };
    
    const handleNewPost = (e) => {
      e.preventDefault();
      console.log(inputText.title);
      if (inputText) {

          modifyPost(postObj.title = inputText.title); //data 수정이 안되는 문제 발생
          //postObj.title = inputText.title;
          modifyPost(postObj.content = inputText.content);
  
        reset();
      } else {
        alert('입력하세요!');
      }
    };

    return(
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
          <PostingButton onClick={handleNewPost}>포스트 수정</PostingButton>
        </Form>
      </Container>
    </>
    );

}

export default ModifiedContainer;