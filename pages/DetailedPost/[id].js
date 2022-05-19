import { useRouter } from 'next/router';
import { useRecoilValue, useSetRecoilState} from 'recoil';
import { PostListState } from '../../src/recoil/recoil';
import Link from 'next/link';
import {Container,Header} from '../../src/GlobalStyle';
import {PostContent,PostDate,PostTitle} from '../../src/DetailPostStyle';

function DetailContainer() {
  const router = useRouter();
  const navigateHome = () => router.push('/MainPage');
  const { id } = router.query;
  const numbering = Number(id);
  const currentPostList = useRecoilValue(PostListState);

  const [postObj] = currentPostList.filter((post) => post.id === numbering);

  const setPostList = useSetRecoilState(PostListState);
  
  const onHandleDelete = () => {
    setPostList((item) => item.filter((item) => item.id !== postObj.id));
    navigateHome();
  };
  return (
    <>
      <Container>
        <Header>나의 블로그</Header>
      <PostTitle>{postObj?.title}</PostTitle>
      <PostContent>{postObj?.content}</PostContent>
      <PostDate>{postObj?.date}</PostDate>
      
      <Link key={id} href={'/EditPost/[id]'} as={`/EditPost/${id}`}>
        <button>Edit</button>
      </Link>

      <button onClick={onHandleDelete}>Delete</button>
      </Container>
    </>
  );
}


export default DetailContainer;
