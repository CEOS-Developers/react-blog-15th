import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useState, useEffect } from "react";
import { deletePost } from "../../store/modules/post";

const Detail = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [post, setPost] = useState({
    id: "",
    title: "",
    content: "",
    date: "",
  });
  const posts = useAppSelector((state) => state.post.posts);

  const handleDelete = (): void => {
    dispatch(deletePost(String(router.query.id)));
    router.push("/");
  };

  useEffect(() => {
    const idx = posts.findIndex((post) => post.id === router.query.id);
    setPost(posts[idx]);
  }, []);

  return (
    <Container>
      <Title>{post.title}</Title>
      <Date>{post.date}</Date>
      <ScrollContents>
        <section>{post.content}</section>
        <ButtonsBox>
          <Link href="/">
            <Button>목록</Button>
          </Link>
          <Link href={`/edit/${router.query.id}`}>
            <Button>수정</Button>
          </Link>
          <Button onClick={handleDelete}>삭제</Button>
        </ButtonsBox>
      </ScrollContents>
    </Container>
  );
};

export default Detail;

const Container = styled.section`
  border: 0.01rem solid grey;
  border-radius: 1rem;
  height: 40rem;
  width: 50rem;
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  font-size: 2rem;
  margin: 2rem;
`;
const Date = styled.p`
  display: flex;
  justify-content: flex-end;
  margin: 2rem;
`;
const ScrollContents = styled.section`
  height: 30rem;
  margin: 1rem 2rem;
  overflow: auto;
`;
const ButtonsBox = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-top: 3rem;
`;
const Button = styled.a`
  margin: 0 1rem;
`;
