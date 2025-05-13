
import './App.css'
// import Course from './components/Course'
import ToggleSwitch from './components/ToggleSwitch'
import UserProfile from './components/UserProfile'
// import Counter from './Counter'

function App() {

  const user = {
    name: "Amjad Ahmed",
    email: "amjad.ahmed@gmal.com",
    phone: "+1234567890",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skills: ["JavaScript", "React", "Node.js"],
    profileImgURL: "https://media.istockphoto.com/id/547436912/photo/bungee-jumping.jpg?b=1&s=612x612&w=0&k=20&c=6Rs3o7rJnqYutVDcxwYA-ogyGX0SUjCGl2Reymtj9Rk=",
    portfolioURL: "https://github.com/AWworks",
  }
  return (
    <>

      {/* <Course />
      <Counter title='Counter 1' initialCount={10} />
      <Counter title='Counter 2' initialCount={20} /> */}
      {/* <ToggleSwitch /> */}
      <UserProfile
        name={user.name}
        email={user.email}
        phone={user.phone}
        summary={user.summary}
        skills={user.skills}
        profileImgURL={user.profileImgURL}
        portfolioURL={user.portfolioURL}
      />
    </>
  )
}

export default App
