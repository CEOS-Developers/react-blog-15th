import styled from "styled-components";
import Link from "next/link";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useRouter } from "next/router";
import { addPost, updatePost } from "../../store/modules/post";
import PostLayout from "../../components/PostLayout";

const Edit = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.post.posts);
  const [input, setInput] = useState({ title: "", content: "" });
  const { title, content } = input;

  const handleSubmit = (): void => {
    const idx = posts.findIndex((post) => post.id === router.query.id);
    const cur = new Date();
    const date = `${String(cur.getMonth() + 1).padStart(2, "0")}-${String(
      cur.getDate()
    ).padStart(2, "0")} ${String(cur.getHours()).padStart(2, "0")}:${String(
      cur.getMinutes()
    ).padStart(2, "0")}`;
    const postObj = {
      id: String(router.query.id),
      title,
      content,
      date,
    };

    if (idx === -1) {
      // 새로운 post 작성
      dispatch(addPost(postObj));
    } else {
      // post update
      dispatch(updatePost(postObj));
    }

    router.push(`/detail/${router.query.id}`);
  };
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const idx = posts.findIndex((post) => String(post.id) === router.query.id);
    if (idx !== -1) {
      // post update인 경우
      setInput({ title: posts[idx].title, content: posts[idx].content });
    }
  }, []);

  return (
    <PostLayout>
      <TitleInput
        name="title"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={handleInputChange}
      />
      <ContentInput
        name="content"
        value={content}
        onChange={handleInputChange}
      />
      <Buttons>
        <Button onClick={handleSubmit}>작성완료</Button>
        <Link href="/">
          <Button>취소</Button>
        </Link>
      </Buttons>
    </PostLayout>
  );
};

export default Edit;

const TitleInput = styled.input`
  width: 100%;
  margin: 1rem 0rem 2rem 0rem;
  padding: 0rem 2rem;

  font-size: 2rem;
  border: none;
  font-weight: bold;

  :focus {
    outline: none;
  }
`;
const ContentInput = styled.textarea`
  width: 100%;
  height: 30rem;

  margin: 0 2rem 1rem 2rem;
  padding: 1rem 2rem;
  overflow: auto;
  resize: none;

  border: none;
  outline: none;
  border-top: 0.01rem solid grey;

  font-size: 1rem;
  line-height: 2rem;
`;
const Buttons = styled.section`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Button = styled.a`
  & + & {
    margin: 0 2rem;
  }
`;
