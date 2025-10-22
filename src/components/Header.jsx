import logo from "/img/Logo.png";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="grid grid-cols-3 items-center text-white border-b border-gray-200 p-2">
      <div className="flex gap-2 items-center">
        <img src={logo} alt="" className="w-15" />
        <h1 className="text-2xl">Fishing Store</h1>
      </div>
      <div>
        <Navbar />
      </div>
    </header>
  );
};
