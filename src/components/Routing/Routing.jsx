import { Routes, Route } from "react-router-dom";
import LoginPage from "../Authentication/LoginPage";
import SignupPage from "../Authentication/SignupPage";
import CartPage from "../Cart/CartPage";
import HomePage from "../Home/HomePage";
import MyOrderPage from "../MyOrder/MyOrderPage";
import ProductsPage from "../Products/ProductsPage";
import SingleProductPage from "../SingleProduct/SingleProductPage";
import Logout from "../Authentication/Logout";
import ProtectedRoute from "./ProtectedRoute";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/product/:id" element={<SingleProductPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/myorders" element={<MyOrderPage />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
  );
};

export default Routing;
