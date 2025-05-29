import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import CourseList from './components/CourseList';
import Footer from './components/Footer';
// import PostsList from './components/PostLists';
// import PostsList from './components/PostLists';
import Products from './components/Products';
import RecipeListSSPage from './components/RecipeListSSPage';
import RecipeDetails from './components/RecipeDetails';
import CourseEdit from "./components/CourseEdit";
import CourseAdd from "./components/CourseAdd";


function App() {

  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
      <Navbar />
      <main className='container my-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path='addcourse' element={<CourseAdd />} />
          <Route path='editcourse' element={<CourseEdit />} />
          {/* <Route path="/posts" element={<PostsList />} />  */}
          <Route path="/products" element={<Products />} />
          <Route path="/recipes" element={<RecipeListSSPage />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
