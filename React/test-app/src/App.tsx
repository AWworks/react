import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import CourseList from './components/CourseList';
import Footer from './components/Footer';
// import PostsList from './components/PostLists';
// import PostsList from './components/PostLists';
import Products from './components/Products';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {

  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
      <Navbar />
      <main className='container my-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CourseList />} />
          {/* {/* <Route path="/posts" element={<PostsList />} />  */} 
          <Route path="/products" element={<Products />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
