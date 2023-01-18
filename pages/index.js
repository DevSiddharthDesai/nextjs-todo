import Head from 'next/head';
import Header from '@/components/Header/Header';

const index = () => {
  return (
    <div className='container'>
      <Head>
        <title>My Cool App</title>
      </Head>
      <Header />
    </div>
  )

  
}

export default index