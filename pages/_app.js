import '../styles/globals.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import '../css/main.css'

function MyApp({ Component, pageProps }) {
   return (
      <>
         <div className='flex flex-col h-screen'>
             <Header />
            <main className='flex-1 overflow-y-auto'>
               <Component {...pageProps} />
               <footer className='bg-slate-800 text-white '>
                  <Footer />
               </footer>
            </main>
         
         </div>
      </>
   )
}

export default MyApp
