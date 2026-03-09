import {Routes, Route} from "react-router-dom"
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Navbar from './Components/Navbar.jsx'
import Product from './Components/Product.jsx'
import NoTFound from "./Components/NotFound.jsx"
import Login from "./Components/Login.jsx"


function App() {

  return (
    <div>
      <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<NoTFound/>}/>
    </Routes>
    </div>
  )
}

export default App
