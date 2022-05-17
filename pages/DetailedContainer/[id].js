import {useRouter} from 'next/router';
import DetailedPost from '../../src/components/DetailedPost';
import data from '../../src/data/data.json';
import { useRecoilValue } from 'recoil';
import { PostListState } from '../../src/recoil/recoil';

function DetailContainer(){
    
    const router = useRouter();
    const {id} = router.query;
    const numbering = Number(id);
    const currentPostList = useRecoilValue(PostListState);

    const [postObj] = currentPostList.filter((post) => post.id === numbering); //id를 이용해서 post filter

    const title = postObj.title; //각 내용들 변수에 저장
    const content = postObj.content;
    const date = postObj.date;
    return(
        <>
        <div>{title}</div>
        <div>{content}</div>
        <div>{date}</div>
        </>
    );
}

export default DetailContainer;