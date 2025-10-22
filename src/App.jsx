import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { HomePages } from "./pages/HomePages";
import { ListProductPage } from "./pages/ListProductPage";
import { ContactPage } from "./pages/ContactPage";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/listproduct" element={<ListProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
};
