import Welcome from "./components/Welcome"
import Header from "./components/Header"
import ProfileCard from "./components/ProfileCard"
import Counter from "./components/Counter"
import { Routes,Route } from "react-router"
import TermsPage from "./pages/TermsPage"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"


type Teacher ={
  name :string
  job : string
  year : number
  id: number
}

const teachers  : Teacher[] =[
  {
    name : "Aldo",
    job : "Programer",
    year : 2006,
    id : 1,
  },
  {
    name : "Wiranata",
    job : "President",
    year : 2006,
    id : 2,
  },
  {
    name : "MY",
    job : "collage",
    year : 2006,
    id : 3,
  }
]


//component
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/terms"  element={<TermsPage/>}/>
      <Route path="*"  element={<NotFoundPage/>}></Route>
    </Routes>
  )
}

export default App
