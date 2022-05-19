import { postList } from '../store/recoil';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Link from 'next/link';

const Alist = () => {
  const posts = useRecoilValue(postList);
  console.log(posts);
  return (
    <>
      {posts.map((post) => {
        return (
          <Wrapper>
            <Link
              href={{
                pathname: `/get/${post.id}`,
                query: { currentPost: JSON.stringify(post) },
              }}
              as={`/get/${post.id}`}
            >
              <a>
                <h3>{post.title}</h3>
              </a>
            </Link>
            <div>{post.date}</div>
          </Wrapper>
        );
      })}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  border: 1px solid red;
  margin: 10px auto 10px auto;
  justify-content: space-around;
`;

export default Alist;
