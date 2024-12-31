import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Footer from './components/Footer'

const App = () => {
  return (
   <>
   <Navbar />
   <div className='max-w-7xl mx-auto pt-20 px-6'>
    <div id='hero'><Intro /></div>
    <div id='section1'><Section1 /></div>
    <div id='section2'><Section2 /></div>
    <div id='section3'><Section3 /></div>
    <div id='section4'><Section4 /></div>
    <div id='footer'><Footer /></div>
   </div>
   </>
  )
}

export default App