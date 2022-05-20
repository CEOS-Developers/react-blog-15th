import { useRecoilValue, useSetRecoilState } from 'recoil';
import { PostListState } from '../recoil/recoil';
import Link from 'next/link';
import { Container, Header, CenteringWrapper } from '../GlobalStyle';
import {
  PostContent,
  PostDate,
  PostTitle,
} from '../styles/DetailedPostStyle';
import useNavigateHome from '../hooks/useNavigateHome';
import { PostHandleButton } from '../styles/EditorStyle';
import useRouting from '../hooks/useRouting';

function DetailedContainer() {
  
  const navigateHome = useNavigateHome();
  const numbering = useRouting();

  const currentPostList = useRecoilValue(PostListState);
  const setPostList = useSetRecoilState(PostListState);

  const [postObj] = currentPostList.filter((post) => post.postNum === numbering);

  const onHandleDelete = () => {
    setPostList((item) => item.filter((item) => item.postNum !== postObj.postNum));
    navigateHome();
  };
  
  return (
    <>
      <Header>My Post</Header>
      <CenteringWrapper>
        <Container>
          <PostTitle>{postObj?.title}</PostTitle>
          <PostContent>{postObj?.content}</PostContent>
          <PostDate>{postObj?.date}</PostDate>
          <Link href={'/EditPost/[id]'} as={`/EditPost/${numbering}`}>
            <PostHandleButton>Edit</PostHandleButton>
          </Link>
          <PostHandleButton onClick={onHandleDelete}>Delete</PostHandleButton>
        </Container>
      </CenteringWrapper>
    </>
  );
}

export default DetailedContainer;