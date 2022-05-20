import PostItem from 'components/PostItem';
import styled from 'styled-components';
import postsData from '../assets/json/posts.json';
import { media } from 'styles/theme';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAppSelector } from 'hooks/useAppSelector';
// 메인 페이지에서는 각 포스트들의 제목과 작성 날짜를 리스트 형태로 보여줍니다.
// 포스트 삭제 기능을 구현합니다.

function Index() {
  const router = useRouter();
  const posts = useAppSelector((state) => state.posts);
  return (
    <Wrapper>
      <h1>전체 글 보기</h1>
      <PostBox>
        {posts.map((post) => (
          <Link
            key={post.postId}
            href={`/detail/[id]`}
            as={`/detail/${post.postId}`}
          >
            <a>
              <PostItem data={post} />
            </a>
          </Link>
        ))}
      </PostBox>
    </Wrapper>
  );
}

export default Index;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  h1 {
    color: ${({ theme }) => theme.color.blue};
    font-size: 2rem;
    font-weight: 700;
    padding: 50px 0;
  }
`;

const PostBox = styled.div`
  display: grid;
  grid-gap: 36px;
  grid-template-columns: 1fr 1fr 1fr;

  ${media.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  ${media.mobile} {
    grid-template-columns: 1fr;
  }
`;
