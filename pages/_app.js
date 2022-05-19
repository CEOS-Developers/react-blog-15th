import {RecoilRoot} from 'recoil';
import {Container,Header} from '../src/GlobalStyle';
import {Menu} from '../src/Menu';

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
  
  export default MyApp
  