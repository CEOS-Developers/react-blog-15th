//각 포스트들의 제목과 작성 날짜를 리스트 형태로
import styled from "styled-components";
import Link from 'next/link';
import MainPost from "../components/MainPost";
import data from "../data/data.json";

function Main(){
    
    return(
        <>
        <Container>
            <Header>나의 블로그</Header>
            <PostingButton>포스트 쓰기</PostingButton>
            {data.map(({title,data,content})=>
            <MainPost title={title} data={data} content={content}/>)}
        </Container>
        
        </>
    );
    
}

export default Main;

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