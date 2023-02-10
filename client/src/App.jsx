import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import ProductItem from "./Components/ProductItem"
import Products from "./Components/Products"
import ParticularProduct from "./Components/ParticularProduct"
import NewsLetter from "./Components/NewsLetter"
import Footer from "./Components/Footer"
import { Route, Routes } from "react-router-dom"
import Login from "./Components/Login"
import Signup from "./Components/Signup"

function App() {

  return (
    <div className="w-full">
      <Routes>
        <Route path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Products />
              <NewsLetter />
              <Footer />
            </>
          } />
        <Route path="/product/:productid" element={<><ParticularProduct /><Footer/></>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>

  )
}

export default App
