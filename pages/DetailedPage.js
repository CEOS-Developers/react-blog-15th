//메인화면에서 클릭하면 제목, 작성일, 본문의 내용을 표시
//여긴 내가 따로 구성하면 어려워질 것 같아서 일단 내버려둘게용

//상세보기 화면에서 나타나는 포스트

import styled from 'styled-components';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import data from '../data/data.json';

const DetailedPage = ({ title, date, content }) => {
  const { id } = useParams();
  const [postObj] = data.filter((post) => post.id === id);
  const [currentPost, setcurrentPost] = useState(postObj);

  return (
    <PostWrapper
      title={currentPost.title}
      date={currentPost.date}
      content={currentPost.content}
    >
      {title} {date} {content}
    </PostWrapper>
  );
};

export default DetailedPage;
