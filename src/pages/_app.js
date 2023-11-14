import '@/styles/globals.css'
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return(<>
  <Head>
  <script src="https://kit.fontawesome.com/00f269a059.js" crossorigin="anonymous"></script>
  </Head>
  <Component {...pageProps} />
  </>); 
}
