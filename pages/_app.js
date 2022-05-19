import { RecoilRoot } from 'recoil';
import { Container, Header } from '../src/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Container>
        <Header>BLOG</Header>
        <Component {...pageProps} />
      </Container>
    </RecoilRoot>
  );
}

export default MyApp;
