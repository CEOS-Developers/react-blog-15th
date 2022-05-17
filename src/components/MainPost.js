//메인 화면에서 보이는 포스트

import styled from "styled-components";
import React from "react";

const MainPost = React.forwardRef(({ title,data,content }) => {
    return (
      <PostWrapper title={title} date={date} content={content}>
      {title} {data} {content}
      </PostWrapper>
);
  })

const PostWrapper = styled.section`
    
    font-size:15px;
    border-bottom:1px solid grey;
    padding:5px;
    `
export default MainPost;