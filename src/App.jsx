import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Basket from "./components/BasketPage.jsx";
import ProductList from "./components/ProductListPage.jsx";
import productsJson from "/src/json/Products.json";


export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/"element={<ProductList products={productsJson} />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Router>
    </Provider>
  );
}
