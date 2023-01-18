import { Provider } from 'react-redux';
import { store } from '../app/store';
import '../styles/globals.css';
import '../styles/custom.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Zoom } from 'react-toastify';
import { SessionProvider } from 'next-auth/react';

const MyApp = ({ Component, pageProps }) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer transition={Zoom} />
      </Provider>
    </SessionProvider>
  );
};

export default MyApp;
