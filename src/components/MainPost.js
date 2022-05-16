import styled from "styled-components";

const MainPost = ({ title,data,content }) => {
    return (
      <PostWrapper title={title} data={data} content={content}>
      {title} {data} {content}
      </PostWrapper>
    );
  };

const PostWrapper = styled.section`
    
    font-size:15px;
    border-bottom:1px solid grey;
    padding:5px;
    `
export default MainPost;