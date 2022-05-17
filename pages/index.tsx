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
    <Container>
      <Div>
        헬시어 화이팅{""}
        <Link href={`/example/page`}>
          <a>{"샘플 페이지로 링크"}</a>
        </Link>
        {posts.map((post) => (
          <Link key={post.id} href={`/detail/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        ))}
        <a onClick={handleRouting}>작성</a>
      </Div>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 0 2rem;
`;

const Div = styled.div`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
