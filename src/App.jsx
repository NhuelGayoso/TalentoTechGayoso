import { Header } from "./components/Header";
import { Routes, Route} from "react-router-dom";
import { HomePages } from "./pages/HomePages";
import { ListProductPage } from "./pages/ListProductPage";
import { ContactPage } from "./pages/ContactPage";
import { Footer } from "./components/Footer";
import { DetailProductPage } from "./pages/DetailProductPage";
import { Login } from "./auth/Login";
import { CartPage } from "./pages/CartPage";
import { AboutPage } from "./pages/AboutPage";

export const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/listproduct" element={<ListProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/listproduct/:id" element={<DetailProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  );
};
