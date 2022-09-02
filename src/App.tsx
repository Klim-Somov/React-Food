
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import FullPizzas from "./pages/FullPizzas";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import "./scss/app.scss";

function App() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="wrapper">
      <Header searchValue = {searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue}/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/pizza/:id" element={<FullPizzas />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
