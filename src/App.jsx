
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Navbar from './components/Navbar'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <div className='max-w-8xl mx-auto '>
        <Navbar></Navbar>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Education></Education>
      </div>
    </>
  )
}

export default App
