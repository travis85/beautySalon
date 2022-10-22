import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutSalon from '../components/AboutSalon';
import AboutOwner from '../components/AboutOwner';

export default function Home() {
  return (
    <div className='' >

      <Head>
        <title>Beauty Salon Website</title>
        <meta className="description" content="Travis Flake" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
      <main className='grid justify-center relative' >
        <AboutSalon />
        <AboutOwner />
       
        
      </main>

    </div>
    
  )
}
