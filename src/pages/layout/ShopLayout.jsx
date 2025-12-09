import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const ShopLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
