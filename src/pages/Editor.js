//메인 화면에서 글쓰기 버튼을 클릭하면 새로 작성->확인 클릭시 디테일 화면에 매핑됨
//디테일 페이지에서 클릭하면 기존에 작성된 내용을 에디터 페이지로 불러오기+삭제

import styled from "styled-components";

function Editor(){

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
    const Title = styled.div`
    
    font-size:15px;
    border-bottom:1px solid grey;
    padding:5px;
    `
    const Content = styled.div`
    
    font-size:15px;
    border-bottom:1px solid grey;
    padding:5px;
    `

    return(
        <>
        <Container>
            <Header>블로그 글쓰기</Header>
            <PostingButton>포스트 수정</PostingButton>
            <Title>제목</Title>
            <Content>본문</Content>
        </Container>
        
        </>
    );
    
}

export default Editor;