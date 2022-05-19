import { RecoilRoot } from 'recoil';
import { BlogWrapper, Container, BlogHeader } from '../src/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <BlogWrapper>
        <Container>
          <BlogHeader>Pounder Front-end Blog</BlogHeader>
          <Component {...pageProps} />
        </Container>
      </BlogWrapper>
    </RecoilRoot>
  );
}

export default MyApp;
