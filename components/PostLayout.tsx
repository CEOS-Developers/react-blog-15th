import styled from "styled-components";

const PostLayout = ({ children }: { children: React.ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PostLayout;

const Wrapper = styled.div`
  height: 40rem;
  width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 0rem;

  border: 0.01rem solid grey;
  border-radius: 1rem;
  box-shadow: 0rem 0rem 3rem rgba(0, 0, 0, 0.1);
`;
