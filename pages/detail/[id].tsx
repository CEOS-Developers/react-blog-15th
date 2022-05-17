import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useState, useEffect } from "react";
import { deletePost } from "../../store/modules/post";
import PostLayout from "../../components/PostLayout";

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
    if (idx !== -1) {
      setPost(posts[idx]);
    }
  }, []);

  return (
    <PostLayout>
      <Title>{post.title}</Title>
      <Date>{post.date}</Date>
      <ScrollContents>
        <Content>{post.content}</Content>
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
    </PostLayout>
  );
};

export default Detail;

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
  margin: 0 2rem 1rem 2rem;
  overflow: auto;
`;
const Content = styled.section`
  white-space: pre-line;
`;
const ButtonsBox = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-top: 3rem;
`;
const Button = styled.a`
  margin: 1rem;
`;
