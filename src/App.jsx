import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ImagesTextSection from './components/ImagesTextSection';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
            <Header />
            <HeroSection />
            <ImagesTextSection />
            <Footer />
        </div>
    </>
  )
}

export default App
