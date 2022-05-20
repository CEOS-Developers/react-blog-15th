import styled from 'styled-components';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import { wrapper } from 'store';

function Detail({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  console.log(router);
  console.log(posts);
  return (
    <Wrapper>
      <h1>Detail Page {router.query.id}</h1>
    </Wrapper>
  );
}

export default Detail;

// https://github.com/vercel/next.js/blob/canary/examples/with-redux-wrapper/pages/index.js
export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    const posts = store.getState().posts;
    return {
      props: { posts },
    };
  }
);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
    ],
    fallback: true,
  };
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  h1 {
    color: ${({ theme }) => theme.color.blue};
    font-size: 2rem;
    font-weight: 700;
    padding: 50px 0;
  }
`;
