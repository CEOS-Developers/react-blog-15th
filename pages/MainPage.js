//각 포스트들의 제목과 작성 날짜를 리스트 형태로
import styled from "styled-components";
import Link from 'next/link';
import MainPost from "../src/components/MainPost";
import data from "../src/data/data.json";

export default function Main(){

    return(
        <>
        <Container>
            <Header>나의 블로그</Header>
            <Link href="/Editor">
                <PostingButton>포스트 쓰기</PostingButton>
            </Link>

            {data.map(({title,date,content})=>
            <Link href={`/Details/${encodeURIComponent(title)}`}>
            <MainPost title={title} date={date} content={content}/>
            </Link>)}
            
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