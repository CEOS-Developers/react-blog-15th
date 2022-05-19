import {RecoilRoot} from 'recoil';
import {Container,Header,BlogHeader} from '../src/GlobalStyle';
import {Menu} from '../src/Menu';

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
  
  export default MyApp
  