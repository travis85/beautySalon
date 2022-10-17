import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FeaturedStyles from '../components/FeaturedStyles'
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>

      <Head>
        <title>Beauty Salon App</title>
        <meta className="description" content="Travis Flake" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
      <main className='grid justify-center gap'>
        <div className='grid justify-center' >
           <h1 className=''>Book Your Appointment Today!</h1>
        </div>
       
         <FeaturedStyles />
      </main>

      <footer className='bg-slate-800 text-white mt-14 h-40'>
       <Footer />
      </footer>
    </div>
    
  )
}
