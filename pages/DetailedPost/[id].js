import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { PostListState } from '../../src/recoil/recoil';
import Link from 'next/link';
import { Container, Header, CenteringWrapper } from '../../src/GlobalStyle';
import {
  PostContent,
  PostDate,
  PostTitle,
} from '../../src/styles/DetailedPostStyle';
import useNavigateHome from '../../src/hooks/useNavigateHome';

function DetailContainer() {
  const navigateHome = useNavigateHome();
  const router = useRouter();
  const { id } = router.query;
  const numbering = Number(id);
  const currentPostList = useRecoilValue(PostListState);

  const [postObj] = currentPostList.filter((post) => post.id === numbering);

  const setPostList = useSetRecoilState(PostListState);

  const onHandleDelete = () => {
    setPostList((item) => item.filter((item) => item.id !== postObj.id));
    navigateHome();
  };
  return (
    <>
      <Header>글 상세보기</Header>
      <CenteringWrapper>
        <Container>
          <PostTitle>{postObj?.title}</PostTitle>
          <PostContent>{postObj?.content}</PostContent>
          <PostDate>{postObj?.date}</PostDate>

          <Link key={id} href={'/EditPost/[id]'} as={`/EditPost/${id}`}>
            <button>Edit</button>
          </Link>

          <button onClick={onHandleDelete}>Delete</button>
        </Container>
      </CenteringWrapper>
    </>
  );
}

export default DetailContainer;
