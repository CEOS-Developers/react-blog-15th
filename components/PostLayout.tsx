import styled from "styled-components";

const PostLayout = ({ children }: { children: React.ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PostLayout;

const Wrapper = styled.div`
  border: 0.01rem solid grey;
  border-radius: 1rem;
  height: 40rem;
  width: 50rem;
  display: flex;
  flex-direction: column;
`;
