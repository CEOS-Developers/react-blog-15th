import styled from "styled-components";
import React from "react";

function Layout({ children }) {
  return (
    <Block>
      <span>Common Layout</span>
      <div>{children}</div>
    </Block>
  );
}

export default Layout;

const Block = styled.div`
  width: 100%;
  height: 100%;

  span {
    font-size: 3rem;
  }
`;
