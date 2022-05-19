//메인 화면에서 보이는 포스트

import styled from 'styled-components';
import React from 'react';

const MainPost = ({ date, content }) => {
  return (
    <PostWrapper date={date} content={content}>
      <PostContent>{content}</PostContent>
      <PostDate>{date}</PostDate>
    </PostWrapper>
  );
};

export const PostWrapper = styled.section`
  border-bottom: 1px solid grey;
  padding: 5px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
`;
export const PostTitle = styled.div`
  margin-top:0.2rem;
  font-size: 25px;
  font-weight: bold;
  flex: 0.3;
  border-bottom:1px solid grey
`;
export const PostContent = styled.div`
  margin-top: 0.5rem;
  font-size: 15px;
  flex: 0.3;
`;
export const PostDate = styled.div`
  font-size: 12px;
  flex: 0.3;
  color: grey;
`;
export default MainPost;
