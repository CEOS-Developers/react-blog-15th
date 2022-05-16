//각 포스트들의 제목과 작성 날짜를 리스트 형태로
import styled from "styled-components";

function Main(){

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
    const Post = styled.section`
    
    font-size:15px;
    border-bottom:1px solid grey;
    padding:5px;
    `

    return(
        <>
        <Container>
            <Header>나의 블로그</Header>
            <PostingButton>포스트 쓰기</PostingButton>
            <Post>포스팅 될 글1</Post>
            <Post>포스팅 될 글2</Post>
        </Container>
        
        </>
    );
    
}

export default Main;