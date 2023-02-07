import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import ProductItem from "./Components/ProductItem"
import Products from "./Components/Products"
import NewsLetter from "./Components/NewsLetter"
import Footer from "./Components/Footer"

function App() {

  return (
    <div className="w-full">
      <Navbar />
      <Home/>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </div>

  )
}

export default App
