import AppLayout from 'components/AppLayout';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global-style';
import { theme } from '../styles/theme';

// import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { rootReducer } from '../modules';
// import { createStore } from 'redux';
// const store = createStore(rootReducer, composeWithDevTools());
// import store from '../redux/store';
// import { Provider } from 'react-redux';
import { store } from './store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>next-blog</title>
      </Head>
      <GlobalStyle />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
