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
      <Header>글 목록</Header>

      <PostListWrapper>
        {currentPostList.map(({ postNum,title, date, content, id }) => {
          return (
            <Container>
              <Link
                key={id}
                href={'/DetailedPost/[id]'}
                as={`/DetailedPost/${postNum}`}
              >
                <PostLink>{title}</PostLink>
              </Link>
              <MainPost date={date} content={content} />
            </Container>
          );
        })}
        <Link href="/EditorPage">
          <PostingButton>+</PostingButton>
        </Link>
      </PostListWrapper>
    </>
  );
}

const PostingButton = styled.button`
  margin: 1rem;
  padding: 1rem;
  font-size: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 100px;
`;

const PostListWrapper = styled.div`
  padding: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PostLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  margin-top: 0.3rem;

  cursor: pointer;
`;
