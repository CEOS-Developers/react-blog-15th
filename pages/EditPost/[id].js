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

function EditPost() {
  const { inputText, onInputChange, reset } = useInput();
  const [postList, setPostList] = useRecoilState(PostListState);
  const navigateHome = useNavigateHome();
  const router = useRouter();
  const { id } = router.query;
  const numbering = Number(id);
  const [postObj] = postList.filter((post) => post.postNum === numbering);

  const savedTitle = postObj.title;
  const savedContent = postObj.content;

  const handleNewPost = (e) => {
    e.preventDefault();

    if (inputText) {
      const post = {
        postNum:numbering,
        title: inputText.title,
        content: inputText.content,
        date: postObj.date,
        id: postObj.id,
      };

      const newArray = [...postList]; 
      newArray.splice(numbering-1,1,post)     
      setPostList(newArray);
      reset();
    } else {
      alert('입력하세요!');
    }
    navigateHome();
  };

  return (
    <CenteringWrapper>
      <Header>글 수정하기</Header>
      <Container>
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
          <PostHandleButton onClick={handleNewPost}>
            포스트 등록
          </PostHandleButton>
        </Form>
      </Container>
    </CenteringWrapper>
  );
}

export default EditPost;
