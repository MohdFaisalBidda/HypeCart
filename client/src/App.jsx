import Home from "./Components/Home"
import Category from "./Components/Category"
import ParticularProduct from "./Components/ParticularProduct"
import { Route, Routes } from "react-router-dom"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import CategoryProducts from "./Components/CategoryProducts"
import Layout from "./Components/Layout"
import Cart from "./Components/Cart"
import { useSelector } from "react-redux"


function App() {
  const { user } = useSelector((state) => state.auth)

  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:category" element={<CategoryProducts />} />
          <Route path="/products/:productid" element={<ParticularProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {user && (<Route path="/cart" element={<Cart />} />)}
        </Route>
      </Routes>
    </div>

  )
}

export default App
