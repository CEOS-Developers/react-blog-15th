import styled from "styled-components";

// 포스트 상세 페이지에서는 제목, 작성일, 본문의 내용을 표시합니다.
// 성능 최적화를 위한 방법을 적용해 봅니다. -> 포스트 페이지는 SSG 방식을 사용한다.

function Detail() {
  return <Block>Detail Page</Block>;
}

export default Detail;

const Block = styled.div`
  width: 100%;
  height: 100%;
  font-size: 5rem;
`;
