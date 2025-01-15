import Welcome from "./components/Welcome"
import Header from "./components/Header"
import ProfileCard from "./components/ProfileCard"

function App() {
  return (
    <>
      <Header/>
      <h1> Hello World</h1>

      <div style={{margin: "10px", display: "flex", gap: "8px"}}>
      <ProfileCard name="Aldo" year={2000} job="Programmer"/>
      <ProfileCard name="Wiranata" year={2006} job="PM"/>
      <ProfileCard name="Al" year={200} job="p  "/>
       
      </div>
      <Welcome/>
    </>
  )
}

export default App
