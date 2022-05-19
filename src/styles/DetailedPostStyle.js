import styled from 'styled-components';

export const PostWrapper = styled.section`
  border-bottom: 1px solid grey;
  padding: 5px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
`;
export const PostTitle = styled.section`
  margin-top: 0.2rem;
  font-size: 25px;
  font-weight: bold;
  flex: 0.3;
  border-bottom: 1px solid grey;
`;
export const PostContent = styled.article`
  margin-top: 0.5rem;
  font-size: 15px;
  flex: 0.3;
  height: 300px;
`;
export const PostDate = styled.div`
  font-size: 12px;
  flex: 0.3;
  color: grey;
  margin-top: 0.5rem;
`;
