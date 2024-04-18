import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Category from "./Category";
import Layout from "./Layout";
import Home from "./Home";
import NotFound from "./NotFound";
import Cart from "./Cart";
import Privacy from "./Privacy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="category/:slug" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
