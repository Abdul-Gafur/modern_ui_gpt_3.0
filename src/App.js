import React from 'react';
import { Blog, Features, Footer, Header, Possibility, Whatgpt3 } from './containers/index';
import { Brand, CTA, Navbar } from './components/index';
import './index.css';
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt3 />
      <Features />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App