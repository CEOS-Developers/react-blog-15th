import styled from "styled-components";

// 포스트를 수정할 때에는 기존에 작성된 내용을 에디터 페이지로 불러옵니다.

function Editor() {
  return <Block>Editor Page</Block>;
}

export default Editor;

const Block = styled.div`
  width: 100%;
  height: 100%;
  font-size: 5rem;
`;
