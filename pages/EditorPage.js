import getInputDate from '../src/hooks/getInputDate';
import useInput from '../src/hooks/useInput';
import { useRecoilState } from 'recoil';
import { PostListState } from '../src/recoil/recoil';
import { Container, Header } from '../src/GlobalStyle';
import useNavigateHome from '../src/hooks/useNavigateHome';
import {
  Form,
  PostingButton,
  Title,
  Content,
  InputWrapper,
} from '../src/styles/EditorStyle';

function EditorPage() {
  const navigateHome = useNavigateHome();
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
        <Header>글 작성하기</Header>
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
