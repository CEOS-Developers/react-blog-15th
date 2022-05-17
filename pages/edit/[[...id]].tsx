import styled from "styled-components";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";

const posts = [
  {
    id: 1,
    title: "title",
    content: "content",
    date: "2022-05-17 11:00",
  },
];

const Edit = () => {
  const router = useRouter();
  const [input, setInput] = useState({
    title: "default title",
    content: "default content",
  });
  const { title, content } = input;

  const handleSubmit = (): void => {
    if (router.query.id) {
      const idx = posts.findIndex(
        (post) => post.id === Number(router.query.id)
      );
      const cur = new Date();
      const date = `${cur.getFullYear()}-${String(cur.getMonth() + 1).padStart(
        2,
        "0"
      )}-${String(cur.getDay()).padStart(
        2,
        "0"
      )} ${cur.getHours()}:${cur.getMinutes()}`;
      posts[idx] = { ...posts[idx], title, content, date };
    }
    console.log(posts);
    router.push(`/detail/${router.query.id ? router.query.id : "1001"}`);
  };
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <TitleInput name="title" value={title} onChange={handleInputChange} />
      <ContentInput
        name="content"
        value={content}
        onChange={handleInputChange}
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
