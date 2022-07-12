import React from 'react'
import Featured from '../components/Featured';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Home() {
  return (
    <div className='bg-[#211f20] max-h-full'>
        <Header />
        <Featured />
        <Footer />
    </div>
  )
}

export default Home