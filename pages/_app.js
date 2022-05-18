import {RecoilRoot} from 'recoil';
import {Container} from '../src/GlobalStyle';

function MyApp({ Component, pageProps }) {
    return <RecoilRoot>
        <Container>
         <Component {...pageProps} />
         </Container>
        </RecoilRoot>
  }
  
  export default MyApp
  