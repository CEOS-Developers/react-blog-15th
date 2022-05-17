import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { wrapper } from "../store/index";
import styled from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Head>
        <title>Team Healthier - CRUD app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default wrapper.withRedux(MyApp);

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
