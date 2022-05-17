//상세화면에서 보이는 포스트

import styled from "styled-components";
import React from "react";
import data from '../data/data.json'

const DetailedPost = (numbering) => {
  const [postObj] = data.filter((post) => post.id === numbering); //id를 이용해서 post filter

    const title = postObj.title; //각 내용들 변수에 저장
    const content = postObj.content;
    const date = postObj.date;
   
  
  return (
      <PostWrapper>
      {title}
      </PostWrapper>
);
  }

const PostWrapper = styled.section`
    
    font-size:15px;
    border-bottom:1px solid grey;
    padding:5px;
    `
export default DetailedPost;