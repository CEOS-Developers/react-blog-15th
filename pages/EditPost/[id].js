import { useRouter } from 'next/router';
import useInput from '../../src/hooks/useInput';
import { useRecoilState } from 'recoil';
import { PostListState } from '../../src/recoil/recoil';
import { Container, Header, CenteringWrapper } from '../../src/GlobalStyle';
import useNavigateHome from '../../src/hooks/useNavigateHome';
import {
  Form,
  PostHandleButton,
  Title,
  Content,
  InputWrapper,
} from '../../src/styles/EditorStyle';
import getInputDate from '../../src/hooks/getInputDate';

function EditPost() {
  const { inputText, onInputChange, reset } = useInput();
  const [postList, setPostList] = useRecoilState(PostListState);
  const navigateHome = useNavigateHome();
  
  const router = useRouter();
  const { id } = router.query;
  const numbering = Number(id);
  
  const [postObj] = postList.filter((post) => post.postNum === numbering);

  const savedTitle = numbering ? postObj.title : "";
  const savedContent = numbering ? postObj.content : "";
  const newDate = getInputDate();

  const handleNewPost = (e) => {
    e.preventDefault();

    if (inputText) {
      const post = {
        postNum : numbering ? numbering : postList.length+1,
        title: inputText.title,
        content: inputText.content,
        date: numbering ? postObj.date : newDate,
        id: numbering ? postObj.id : Date.now(),
      };

      const newArray = [...postList]; 
      newArray.splice(numbering-1,1,post); //포스트 수정 
      setPostList(numbering ? newArray : (postList) => [...postList, post]); //포스트 수정,포스트 등록

      reset();
    } else {
      alert('입력하세요!');
    }
    navigateHome();
  };

  return (
    <CenteringWrapper>
      <Header>{numbering ? "글 수정하기" : "글 등록하기"}</Header>
      <Container>
        <Form>
          <InputWrapper>
            <Title
              type="text"
              name="title"
              defaultValue={savedTitle}
              value={inputText.title}
              onChange={onInputChange}
              placeholder={savedTitle}
              spellCheck="false"
            />
            <Content
              type="text"
              name="content"
              defaultValue={savedContent}
              value={inputText.content}
              onChange={onInputChange}
              placeholder={savedContent}
              spellCheck="false"
            />
          </InputWrapper>
          <PostHandleButton onClick={handleNewPost}>
          {numbering ? "포스트 수정" : "포스트 등록"}
          </PostHandleButton>
        </Form>
      </Container>
    </CenteringWrapper>
  );
}

export default EditPost;
