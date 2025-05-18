import { Route, Routes } from 'react-router-dom'
import './App.css'
import CourseList from './components/CourseList'
import About from './About'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
function App() {


  return (
    <div className="container-fluid">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="courses" element={<CourseList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>

  )
}

export default App
