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
  padding: 2%;
  margin: 2%;
  cursor: pointer;

  display: flex;
  flex-direction: column;
`;
export const PostTitle = styled.div`
  margin-top: 0.2rem;
  font-size: 25px;
  font-weight: bold;
  flex: 0.3;
`;
export const PostContent = styled.div`
  margin-top: 0.5rem;
  font-size: 15px;
  flex: 0.3;
  max-width: 90%px;
  max-height: 20%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const PostDate = styled.div`
  font-size: 12px;
  flex: 0.3;
  color: grey;
`;
export default MainPost;
