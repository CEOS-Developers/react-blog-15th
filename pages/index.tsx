import type { NextPage } from "next";
import styled from "styled-components";
import Link from "next/link";
import { useAppSelector } from "../hooks/useAppSelector";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const posts = useAppSelector((state) => state.post.posts);
  const router = useRouter();

  const handleRouting = (): void => {
    router.push(`/edit/${uuid()}`);
  };

  return (
    <HomeLayout>
      <TitleContainer>
        <Text fontSize="2rem">메모</Text>
        <Text fontSize="1rem">{posts.length}개의 글</Text>
      </TitleContainer>
      <ContentContainer>
        {posts.map((post) => (
          <Link key={post.id} href={`/detail/${post.id}`}>
            <ContentDiv>
              <ContentHeader>
                <Text fontSize="1rem">{post.title}</Text>
                <Text fontSize="0.8rem">{post.date}</Text>
              </ContentHeader>
              <ContentBody>
                <Text fontSize="1rem">{post.content}</Text>
              </ContentBody>
            </ContentDiv>
          </Link>
        ))}
      </ContentContainer>
      <ButtonContainer>
        <a onClick={handleRouting}>작성</a>
      </ButtonContainer>
    </HomeLayout>
  );
};

export default Home;

const HomeLayout = styled.div`
  height: 40rem;
  width: 50rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 0rem;
  border: 0.01rem solid grey;
  border-radius: 1rem;

  box-shadow: 0rem 0rem 3rem rgba(0, 0, 0, 0.1);
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  margin: 1rem 0rem;

  font-size: 2rem;
  font-weight: bold;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 30rem;
  overflow-y: scroll;
  overflow-y: overlay;

  &::-webkit-scrollbar {
    width: 0.6rem;
  }

  & ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.08);
    visibility: hidden;
  }

  &:hover::-webkit-scrollbar-thumb {
    visibility: visible;
    border-radius: 1rem;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0rem 2rem;
`;

const ContentDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-top: 0.01rem solid grey;

  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const ContentHeader = styled.div`
  width: 100%;
  height: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0rem 0.5rem 0rem;
`;

const ContentBody = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;

  margin: 0rem 0rem 1rem 0rem;
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

const Text = styled.div<{ fontSize: string }>`
  height: 100%;
  padding: 0rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ fontSize }) => fontSize};
`;
