

import React from 'react'
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Sale from '@/components/Sale';
import Footer from '@/components/Footer';
const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Products/>
      <Sale/>
      <Footer/>

    </div>
  )
}

export default Home;