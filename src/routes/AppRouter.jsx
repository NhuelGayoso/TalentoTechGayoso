import { createBrowserRouter } from "react-router-dom";
import { HomePages } from "../pages/HomePages";
import { ListProductPage } from "../pages/ListProductPage";
import { ContactPage } from "../pages/ContactPage";
import { DetailProductPage } from "../pages/DetailProductPage";
import { LoginPage } from "../auth/Login/LoginPage";
import { CartPage } from "../pages/CartPage";
import { AboutPage } from "../pages/AboutPage";
import { RegisterPage } from "../auth/Register/RegisterPage";
import AuthLayout from "../auth/Layout/AuthLayout";
import AdminLayout from "../admin/layout/AdminLayout";
import { ShopLayout } from "../pages/layout/ShopLayout";
import FormularioProducto from "../admin/pages/FormularioProduct";
import { AdminProductsPage } from "../admin/pages/AdminProductsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ShopLayout />,
    children: [
      { index: true, element: <HomePages /> },
      { path: "/listproduct", element: <ListProductPage /> },
      { path: "/listproduct/:id", element: <DetailProductPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/about", element: <AboutPage /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [{ path: "/admin/products", element: <AdminProductsPage /> }],
  },
]);
