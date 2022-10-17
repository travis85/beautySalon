import '../styles/globals.css'
import Header from '../components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
   return (
      <>
         <header className='mb-14'>
            <Header />
         </header>
         
         <Component {...pageProps} />
      </>
   
   )
}

export default MyApp
