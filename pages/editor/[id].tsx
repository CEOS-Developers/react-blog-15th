import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useDispatch } from 'react-redux';
import {
  addPost,
  updatePost,
  removePost,
} from '../../features/posts/postsSlice';
import { IPost } from 'shared/interfaces';

// 포스트를 수정할 때에는 기존에 작성된 내용을 에디터 페이지로 불러옵니다.
// https://react.vlpt.us/basic/09-multiple-inputs.html
// https://www.codingfactory.net/10755

function Editor() {
  const posts = useSelector((state: RootState) => state.posts);
  console.log(posts);
  function printPosts() {
    console.log(posts);
  }

  const dispatch = useDispatch();
  const samplePost = {
    postId: '3',
    title: 'sample title',
    content: 'sample content',
    date: '2022-05-18T22:11:18+09:00',
  };
  const addPostTrigger = useCallback(
    (postToAdd: IPost) => dispatch(addPost(postToAdd)),
    [dispatch]
  );
  const updatePostTrigger = useCallback(
    (postToUpdate: IPost) => dispatch(updatePost(postToUpdate)),
    [dispatch]
  );
  const removePostTrigger = useCallback(
    (postIdToRemove: string) => dispatch(removePost(postIdToRemove)),
    [dispatch]
  );

  const [inputs, setInputs] = useState({ title: '', content: '' });
  const { title, content } = inputs;

  function handleInputChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function handleSubmitBtnClick() {}

  return (
    <Block>
      <button onClick={() => addPostTrigger(samplePost)}>add</button>
      <button onClick={() => updatePostTrigger(samplePost)}>update</button>
      <button onClick={() => removePostTrigger(samplePost.postId)}>
        remove
      </button>
      <button onClick={() => printPosts()}>print</button>
      <Title
        name="title"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={handleInputChange}
      />
      <Content
        name="content"
        placeholder="당신의 이야기를 적어보세요..."
        value={content}
        onChange={handleInputChange}
      />
      <BtnWrapper>
        <Link href="/">
          <a>
            <button>← 나가기</button>
          </a>
        </Link>
        <button onClick={handleSubmitBtnClick}>출간하기</button>
      </BtnWrapper>
    </Block>
  );
}

export default Editor;

// export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
//   (store) => () => {
//     const posts = store.getState().post.posts;
//     return {
//       props: { posts },
//     };
//   }
// );

// export async function getStaticPaths() {
//   const paths = getAllPostIds();
//   return {
//     paths,
//     fallback: true,
//   };
// }

const Block = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-left: 3%;
  padding-right: 3%;
`;

const Title = styled.input`
  width: 100%;
  height: 100px;

  font-size: 3rem;
  font-weight: bold;

  margin-top: 3%;
  margin-bottom: 1%;
  border: none;

  ::placeholder {
    color: ${({ theme }) => theme.color.darkGray};
  }
  input::-webkit-input-placeholder {
    color: ${({ theme }) => theme.color.gray};
  }
  input:-ms-input-placeholder {
    color: ${({ theme }) => theme.color.gray};
  }
`;

const Content = styled.textarea`
  width: 100%;
  height: 500px;

  font-size: 1.5rem;
  line-height: 2rem;

  overflow: auto;
  border: none;

  ::placeholder {
    color: #a2a2a2;
    font-style: italic;
  }
  ::-webkit-input-placeholder {
    color: #a2a2a2;
    font-style: italic;
  }
  :-ms-input-placeholder {
    color: #a2a2a2;
    font-style: italic;
  }
`;

const BtnWrapper = styled.section`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    color: ${({ theme }) => theme.color.darkGray};
    font-size: 1.3rem;
  }
`;
