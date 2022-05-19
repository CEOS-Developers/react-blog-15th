import PostItem from "components/PostItem";
import styled from "styled-components";
import postsData from "../assets/json/posts.json";

// 메인 페이지에서는 각 포스트들의 제목과 작성 날짜를 리스트 형태로 보여줍니다.
// 포스트 삭제 기능을 구현합니다.

function Index() {
  const posts = postsData;
  console.log(posts);

  return (
    <Block>
      Main Page
      <span>한규진 바보</span>
      {/* {postsData.map(({ postId, data }) => (
        <PostItem key={postId} data={data} />
      ))} */}
    </Block>
  );
}

export default Index;

const Block = styled.div`
  width: 100%;
  height: 100%;
  font-size: 5rem;

  display: flex;
  flex-direction: column;

  span {
    color: ${({ theme }) => theme.color.blue};
  }
`;
