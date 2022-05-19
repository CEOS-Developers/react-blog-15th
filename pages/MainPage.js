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
              <PostLink>{title}</PostLink>
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
`;

const PostLink = styled.a`
  text-decoration:none;
  font-size:20px;
  font-weight:bold;
  margin-top:0.3rem;

  cursor:pointer;

`;

