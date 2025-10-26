import logo from "/img/Logo.png";
import { Navbar } from "./Navbar";
import { HeaderWidget } from "./HeaderWidget";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex flex-col justify-center lg:grid lg:grid-cols-3 items-center text-white border-b border-gray-200 p-2 ">
      <div>
        <Link to="/" className="flex gap-2 items-center">
          <img src={logo} alt="" className="w-15" />
          <h1 className="text-2xl">Fishing Store</h1>
        </Link>
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <HeaderWidget />
      </div>
    </header>
  );
};
