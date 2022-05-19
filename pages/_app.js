import { RecoilRoot } from 'recoil';
import { Container, BlogHeader} from '../src/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
        <Container>
            <BlogHeader>BLOG</BlogHeader>
         <Component {...pageProps} />
        </Container>
    </RecoilRoot>
  );
}

export default MyApp;
