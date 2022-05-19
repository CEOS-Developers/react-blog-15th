import { RecoilRoot } from 'recoil';
import { BlogHeader, BlogStyle } from '../src/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <BlogStyle />
      <BlogHeader>Pounder💜 Front-end Blog🌟</BlogHeader>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
