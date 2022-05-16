//메인 화면에서 글쓰기 버튼을 클릭하면 새로 작성->확인 클릭시 디테일 화면에 매핑됨
//디테일 페이지에서 클릭하면 기존에 작성된 내용을 에디터 페이지로 불러오기+삭제

import { useCallback, useState,useRef} from "react";
import styled from "styled-components";

function Editor(){

    const [title, setTitle] = useState(""); //useState를 활용해서 title 관리
    const [content, setContent] = useState(""); //useState를 활용해서 editor 관리

    //중복되는 로직 useState 객체로 줄일 예정

    const onChangeTitle = ((event) => {
        setTitle(event.target.value);
        });

   const onChangeContent = ((event) => {
        setContent(event.target.value);
        });

    const Container = styled.div`
    
    width : 1000px;
    margin 0 auto;
    `
    const Header = styled.header`

    font-size:30px;
    `

    const Form = styled.form`
    
    padding:10px;
    `
    const PostingButton = styled.button`
    
    font-size:15px;
    `
    const Title = styled.input`
    
    font-size:15px;
    border-bottom:1px solid grey;
    padding:5px;
    `
    const Content = styled.input`
    
    font-size:15px;
    border-bottom:1px solid grey;
    padding:5px;

    `
    return(
        <>
        <Container>
            <Header>블로그 글쓰기</Header>
            <Form>
                <Title
                type="text"
                value={title}
                onChange={onChangeTitle}
                placeholder="제목"
                spellCheck="false"
                autoFocus={true}
                /> 
                <Content
                type="text"
                value={content}
                onChange={onChangeContent}
                placeholder="본문"
                spellCheck="false"
                />
                <PostingButton>포스트 수정</PostingButton>
            </Form>
        </Container>
        </>
    );
    
}

export default Editor;