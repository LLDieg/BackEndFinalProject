import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import ProductsPage from "./components/ProductsPage.jsx";
import Cart from "./components/Cart.jsx";
import Profile from "./components/Profile.jsx";
import NavBar from "./components/NavBar.jsx";
import MenuPage from "./components/MenuPage.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<ProductsPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
       {/* <Route path="/menu" element={<MenuPage/>} /> */}
        <Route path="/restaurants/:name" element={<MenuPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
