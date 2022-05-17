//메인 화면에서 보이는 포스트

import styled from "styled-components";
import React from "react";

const MainPost = ({ title,date,content }) => {
    return (
      <PostWrapper title={title} date={date} content={content}>
      <PostTitle>{title}</PostTitle>
      <PostContent>{content}</PostContent>
      <PostDate>{date}</PostDate>  
      </PostWrapper>
);
  }

const PostWrapper = styled.section`
    
    border-bottom:1px solid grey;
    padding:5px;
    cursor:pointer;

    display:flex;
    flex-direction:column;

    `
const PostTitle = styled.div`

    font-size:20px;
    font-weight:bold;
    flex:0.3;
`
const PostContent = styled.div`
    
    margin-top:0.5rem;
    font-size:15px;
    flex:0.3;
`
const PostDate = styled.div`

    font-size:12px;
    flex:0.3;
    color:grey;
`
export default MainPost;