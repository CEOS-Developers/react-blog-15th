import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Edit = () => {
  const router = useRouter();
  const [title, setTitle] = useState("default title");
  const [content, setContent] = useState("default content");

  const handleSubmit = (): void => {
    router.push(`/detail/${router.query.id ? router.query.id : "1001"}`);
  };

  return (
    <Container>
      <TitleInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <ContentInput
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Buttons>
        <Button onClick={handleSubmit}>수정완료</Button>
        <Link href="/">
          <Button>취소</Button>
        </Link>
      </Buttons>
    </Container>
  );
};

export default Edit;

const Container = styled.section`
  border: 0.01rem solid grey;
  height: 40rem;
  width: 30rem;
  display: flex;
  flex-direction: column;
`;
const TitleInput = styled.input`
  font-size: 2rem;
  margin: 1.5rem;
  padding: 0.5rem;
  width: 26.5rem;
  border: none;
  border-bottom: 0.01rem solid grey;
  :focus {
    outline: none;
  }
`;
const ContentInput = styled.textarea`
  margin: 1.5rem;
  padding: 0.5rem;
  width: 26.5rem;
  height: 27rem;
  font-size: 1rem;
  resize: none;
  border: 0.01rem solid grey;
  :focus {
    outline: none;
  }
`;
const Buttons = styled.section`
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.a`
  & + & {
    margin: 0 2rem;
  }
`;
