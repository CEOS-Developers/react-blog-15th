import { useRouter } from 'next/router';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { PostListState } from '../../src/recoil/recoil';
import Link from 'next/link';

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
      <div>{postObj?.title}</div>
      <div>{postObj?.content}</div>
      <div>{postObj?.date}</div>
      <Link href="/EditorPage">
        <button>Edit</button>
      </Link>
      <button onClick={onHandleDelete}>Remove</button>
    </>
  );
}

export default DetailContainer;
