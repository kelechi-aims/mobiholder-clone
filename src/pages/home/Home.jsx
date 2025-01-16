import React from 'react';
import Header from '../../components/home/herosection/Header';
import About from '../../components/home/about/About';
import Features from '../../components/home/features/Features';
import CallToAction from '../../components/home/calltoaction/CallToAction';
import News from '../../components/home/news/News';
import Faqs from '../../components/home/faqs/Faqs';

const Home = () => {
  return (
    <div>
      <Header />
      <About/>
      <Features />
      <CallToAction />
      <News />
      <Faqs />
      
    </div>
  )
}

export default Home