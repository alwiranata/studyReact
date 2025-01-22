import Welcome from "./components/Welcome"
import Header from "./components/Header"
import ProfileCard from "./components/ProfileCard"
import Counter from "./components/Counter"

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

function App() {
  return (
    <div
    style={{
      padding : "flex",
      gap : "16px"
    }}
    >
      <Header/>
     <Counter/>
      {/* <div style={{margin: "10px", display: "flex", gap: "8px"}}>
      {
        teachers.map((teacher) =>{
          return(
            <ProfileCard 
            name={teacher.name} 
            job={teacher.job} 
            year={teacher.year}
            key = {teacher.id}
            />
          )
        })
      }
       
      </div> */}
      <Welcome/>
    </div>
  )
}

export default App
