import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

const Home = lazy(() => import("./Components/Home.jsx"));
const Search = lazy(() => import("./Components/Search.jsx"));
const Category = lazy(() => import("./Components/Category"));
const ParticularProduct = lazy(() => import("./Components/ParticularProduct"));
const Login = lazy(() => import("./Components/Login"));
const Signup = lazy(() => import("./Components/Signup"));
const CategoryProducts = lazy(() => import("./Components/CategoryProducts"));
const Cart = lazy(() => import("./Components/Cart"));
const NotFound = lazy(() => import("./Components/NotFound"));
const Checkout = lazy(() => import("./Components/Checkout"));

const Shipping = lazy(() => import("./Components/Shipping"));
const ProductManagement = lazy(() => import("./Components/ProductManagement"));
const NewProduct = lazy(() => import("./Components/NewProduct"));
const Transaction = lazy(() => import("./Components/Transaction"));
const Customer = lazy(() => import("./Components/Customer"));
const Products = lazy(() => import("./Components/Products"));
const Dashboard = lazy(() => import("./Components/Dashboard"));
const TransactionManagement = lazy(() =>
  import("./Components/TransactionManagement")
);

import Loader from "./Components/Loader.jsx";
import ProtectedRoutes from "./Components/ProtectedRoutes.jsx";

function App() {
  const { user } = useSelector((state) => state.auth);
  // console.log(user.user.isAdmin);

  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/search" element={<Search />} />
          {user && <Route path="/cart" element={<Cart />} />}
          <Route path="/category" element={<Category />} />
          <Route path="/category/:category" element={<CategoryProducts />} />
          <Route path="/products/:productid" element={<ParticularProduct />} />

          {/* Not logged In Route */}

          <Route
            path="/login"
            element={
              <ProtectedRoutes isAuthenticated={user ? false : true}>
                <Login />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRoutes isAuthenticated={user ? false : true}>
                <Signup />
              </ProtectedRoutes>
            }
          />

          {/* Logged In User Routes */}
          <Route
            element={<ProtectedRoutes isAuthenticated={user ? true : false} />}
          >
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/pay" element={<Checkout />} />
          </Route>

          <Route
            element={
              <ProtectedRoutes
                isAuthenticated={true}
                adminOnly={true}
                admin={user?.user?.isAdmin}
              />
            }
          >
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/customer" element={<Customer />} />
            <Route path="/admin/transaction" element={<Transaction />} />

            {/* management */}
            <Route path="/admin/product/new" element={<NewProduct />} />
            <Route path="/admin/product/:id" element={<ProductManagement />} />
            <Route
              path="/admin/transaction/:id"
              element={<TransactionManagement />}
            />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer/>
    </>
  );
}

export default App;
