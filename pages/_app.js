import 'codethings-react-ui/dist/styles.css';
import Head from "next/head";
import { GlobalStyles } from '../components/styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700,700italic,300,900,900italic,300italic,400italic" />        

      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
