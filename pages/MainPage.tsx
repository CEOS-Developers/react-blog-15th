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
      <Header>Post List</Header>
      <PostListWrapper>
        <Link href={'/EditPost/[id]'} as={`/EditPost/0`}>
          <PostingButton>+</PostingButton>
        </Link>

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

  cursor: pointer;

  &:hover{
    opacity:0.7;
    transform: scale(1.3);
  }
`;

const PostListWrapper = styled.div`
  padding: 1%;
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

  &:hover{
    opacity:0.2;
    
  }
`;
