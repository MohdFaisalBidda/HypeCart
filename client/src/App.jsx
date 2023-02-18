import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import CategoryItem from "./Components/CategoryItem"
import Category from "./Components/Category"
import ParticularProduct from "./Components/ParticularProduct"
import NewsLetter from "./Components/NewsLetter"
import Footer from "./Components/Footer"
import { Route, Routes } from "react-router-dom"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import CategoryProducts from "./Components/CategoryProducts"
import Layout from "./Components/Layout"

function App() {

  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:category" element={<CategoryProducts />} />
          <Route path="/products/:productid" element={<><ParticularProduct /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>

  )
}

export default App
