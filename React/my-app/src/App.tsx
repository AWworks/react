
import './App.css'
import Course from './components/Course'
import Counter from './Counter'

function App() {

  return (
    <>

      <h1>Hi! from App.</h1>
      <h2>Welcome to the Course List</h2>
      <Course />
      <Counter title='Counter 1' initialCount={10} />
      <Counter title='Counter 2' initialCount={20} />
    </>
  )
}

export default App
