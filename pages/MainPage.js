//각 포스트들의 제목과 작성 날짜를 리스트 형태로
import styled from "styled-components";
import Link from 'next/link';
import MainPost from "../src/components/MainPost";
import data from "../src/data/data.json";
import { useRouter} from "next/router";
import { useRecoilValue } from "recoil";
import { PostListState } from "../src/recoil/recoil";
export default function MainPage(){

    const currentPostList = useRecoilValue(PostListState);
    
    return(
        <>
        <Container>
            <Header>나의 블로그</Header>
            <Link href="/EditorPage">
                <PostingButton>포스트 쓰기</PostingButton>
            </Link>

            {currentPostList.map(({title,date,content,id})=>
            {
                return(
                <>
                <Link key={id} href={"/DetailedContainer/[id]"} as = {`/DetailedContainer/${id}`}>
               <a>{title}</a>
               </Link>
               <MainPost title={title} date={date} content={content}/>
            </>
            );
            }
            )}
        </Container>
        
        </>
    );
    
}

const Container = styled.div`
    
    width : 1000px;
    margin 0 auto;
    `
    const Header = styled.header`

    font-size:30px;
    `

    const PostingButton = styled.button`
    
    font-size:15px;
    `