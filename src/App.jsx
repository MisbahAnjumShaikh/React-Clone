import './App.css'
import Navbar from "./components/Navbar.jsx"
import Hero from './components/Hero.jsx'

{/* 
function Card(props){

  return(
    <div>
     <h2></h2>
    </div>
  )
}
*/}
function App() {
 {/* const arr = ["one", "two", "three"]*/}

  return (
    <div>
    {/* 
    {arr.map((v, i) => {
      <Card v = {v}/>
    })}
      */}
     <Navbar/>
    <Hero/>
      </div>
  )
}

export default App
