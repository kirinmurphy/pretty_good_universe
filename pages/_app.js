import 'codethings-react-ui/dist/styles.css';
import Head from "next/head";
import { GlobalStyles } from '../components/styles/GlobalStyles';
import { Footer } from '../components/Page/Footer';

import { config, dom } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <style>{dom.css()}</style>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700,700italic,300,900,900italic,300italic,400italic" />        

      </Head>
      <GlobalStyles />
      <iframe id="bg" src="https://codethings-threejs-demo.netlify.app/" />
      {/* <iframe id="bg" src="https://projects.codethings.net/algorithmy_stuff/canvases/cssstenstein/" /> */}
      <div id="page" className="panel--dark">
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp
