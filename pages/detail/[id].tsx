import styled from "styled-components";
import Link from "next/link";

const Detail = () => {
  return (
    <Container>
      <Title>title</Title>
      <Date>2022-05-16 00:00</Date>
      <ScrollContents>
        <section>내용</section>
        <ButtonsBox>
          <Link href="/edit">
            <Button>수정</Button>
          </Link>
          <Link href="/">
            <Button>삭제</Button>
          </Link>
        </ButtonsBox>
      </ScrollContents>
    </Container>
  );
};

export default Detail;

const Container = styled.section`
  border: 0.01rem solid grey;
  height: 40rem;
  width: 30rem;
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  font-size: 2rem;
  margin: 1.5rem;
`;
const Date = styled.p`
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
`;
const ScrollContents = styled.section`
  height: 30rem;
  margin: 1.5rem;
  overflow: auto;
`;
const ButtonsBox = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
`;
const Button = styled.a`
  margin: 0 1rem;
`;
