import styled, { createGlobalStyle } from 'styled-components';

export const BlogWrapper = styled.span`
  width: 100%;
  margin 0 auto;
`;

export const BlogHeader = styled.h1`
  font-weight: bold;
  font-size: 30px;
`;

export const Header = styled.h2`
  font-weight: bold;
  font-size: 20px;
`;
export const Container = styled.div`
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;
  background-color: white;
  width: 50%;
  height: 50%;
  margin: 2%;
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
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 99%;
    `;
