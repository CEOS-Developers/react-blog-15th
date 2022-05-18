import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { PostListState } from '../../src/recoil/recoil';
import Link from 'next/link';
import {EditorPage} from "../EditorPage";

function ModifiedContainer(){

    const router = useRouter();
    const { id } = router.query;

    const currentPostList = useRecoilValue(PostListState);
    const [postObj] = currentPostList.filter((post) => post.id === id); //id를 이용해서 post filter

    return(
        <>
        <div>{id}</div>
        <input value="title"></input>
        </>
    );

}

export default ModifiedContainer;