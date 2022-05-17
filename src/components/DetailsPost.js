//메인화면에서 보이는 포스트

import styled from "styled-components";
import React from "react";

const DetailsPost = ({ title,date,content }) => {
    return (
      <PostWrapper title={title} date={date} content={content}>
      {title} {date} {content}
      </PostWrapper>
);
  }

const PostWrapper = styled.section`
    
    font-size:15px;
    border-bottom:1px solid grey;
    padding:5px;
    `
export default DetailsPost;