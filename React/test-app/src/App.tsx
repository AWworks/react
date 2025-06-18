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
import CounterUsingReducer from './components/CounterUsingReducer';
import TodoListReducer from './components/TodoListReducer';


function App() {

  return (
    <div className="container-fluid d-flex flex-column ">
      <Navbar />
      <main className='container min-vh-100 my-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path='addcourse' element={<CourseAdd />} />
          <Route path='editcourse/:id' element={<CourseEdit />} />
          {/* <Route path="/posts" element={<PostsList />} />  */}
          <Route path="/products" element={<Products />} />
          <Route path="/recipes" element={<RecipeListSSPage />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/todo" element={<TodoListReducer />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
