//각 포스트들의 제목과 작성 날짜를 리스트 형태로
import styled from 'styled-components';
import Link from 'next/link';
import MainPost from '../src/components/MainPost';
import { useRecoilValue } from 'recoil';
import { PostListState } from '../src/recoil/recoil';
import { Container, Header } from '../src/GlobalStyle';

export default function MainPage() {
  const currentPostList = useRecoilValue(PostListState);

  return (
    <>
      <Header>나의 블로그</Header>
      <PostListWrapper>
      {currentPostList.map(({ title, date, content, id }) => {
        return (
          <>
            <Link
              key={id}
              href={'/DetailedPost/[id]'}
              as={`/DetailedPost/${id}`}
            >
              <a>{title}</a>
            </Link>
            <MainPost date={date} content={content} /> 
          </>
        );
      })}
      </PostListWrapper>

      <Link href="/EditorPage">
        <PostingButton>포스트 쓰기</PostingButton>
      </Link>
    </>
  );
}

const PostingButton = styled.button`
  margin: 0.5rem;
  font-size: 15px;
`;

const PostListWrapper = styled.div`
   overflow:auto;
`
