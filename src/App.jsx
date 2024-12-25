
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <div className='max-w-8xl mx-auto '>
        <Navbar></Navbar>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Skills></Skills>
        <Education></Education>
      </div>
    </>
  )
}

export default App
