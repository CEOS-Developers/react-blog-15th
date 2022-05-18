import { useRouter } from 'next/router';
import { useRecoilValue, useSetRecoilState} from 'recoil';
import { PostListState } from '../../src/recoil/recoil';
import Link from 'next/link';
import {Container} from '../../src/GlobalStyle';

function DetailContainer() {
  const router = useRouter();
  const navigateHome = () => router.push('/MainPage');
  const { id } = router.query;
  const numbering = Number(id);
  const currentPostList = useRecoilValue(PostListState);

  const [postObj] = currentPostList.filter((post) => post.id === numbering); //id를 이용해서 post filter

  const setPostList = useSetRecoilState(PostListState);
  
  const onHandleDelete = () => {
    setPostList((item) => item.filter((item) => item.id !== postObj.id));
    navigateHome();
  };
  return (
    <>
    <Container>
      <div>{postObj?.title}</div>
      <div>{postObj?.content}</div>
      <div>{postObj?.date}</div>
      <Link 
      href={'/ModifiedPost/[id]'}
      as={`/ModifiedPost/${numbering}`}>
        <button>수정하기</button>
      </Link>
      <button onClick={onHandleDelete}>Delete</button>
      </Container>
    </>
  );
}


export default DetailContainer;
