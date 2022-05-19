import React from "react";
import styled from "styled-components";

function PostItem({ postId, data }: any) {
  return <Block>{data}</Block>;
}

export default PostItem;

const Block = styled.div`
  width: 100%;
  height: 100%;
`;
