//상세보기 화면에서 나타나는 포스트

import styled from "styled-components";
import React,{ useState } from "react";
import { useParams } from 'react-router-dom';

import data from "../data/data.json"

const DetailPost = ({ title,date, content }) => {
    const { milisec } = useParams();
    const [postObj] = data.filter((post) => post.milisec === milisec);
    const [currentPost, setcurrentPost] = useState(postObj);

    return (
      <PostWrapper title={currentPost.title} date={currentPost.date} content={currentPost.content}>
      {title} {date} {content}
      </PostWrapper>
);
  }

  export default DetailPost;