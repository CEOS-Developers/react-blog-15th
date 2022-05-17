import type { NextPage } from "next";
import styled from "styled-components";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Container>
      <Div>
        헬시어 화이팅{""}
        <Link href={`/example/page`}>
          <a>{"샘플 페이지로 링크"}</a>
        </Link>
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
