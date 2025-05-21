// import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home';
import CourseList from './components/CourseList';
import Footer from './components/Footer';
import PostsList from './components/PostLists';
import Products from './components/Products';
import RecipeList from './components/RecipeList';

function App() {

  return (
    <div className="container">
      <Navbar />
      <main className='container my-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/posts" element={<PostsList />} />
          <Route path="/products" element={<Products />} />
          <Route path="/recipes" element={<RecipeList />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
