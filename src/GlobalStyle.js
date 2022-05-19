import styled, { createGlobalStyle } from 'styled-components';

export const BlogHeader = styled.h1`
  font-weight: bold;
  font-size: 30px;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.h2`
  font-weight: bold;
  font-size: 20px;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;
  background-color: white;
  width: 70%;
  height: 70%;
  margin: 2%;
  padding: 2%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const CenteringWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BlogStyle = createGlobalStyle`
  *{  
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
  html {
    font-size : 16px;
  }
  body {
    background: linear-gradient(330deg, #2ebfff63, rgba(232,166,255,0.91));
  }
  
    height: 100%;
    width: 99%;
    `;
