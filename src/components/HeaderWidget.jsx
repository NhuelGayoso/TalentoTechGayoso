import { FaShoppingCart, FaUser, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const HeaderWidget = () => {
  return (
    <div className="flex items-center gap-5 justify-end mr-5">
      <div className="flex items-center gap-2">
        <Link to="/wishlist">
          <FaHeart className="text-white" />
        </Link>
      </div>
      <div>
        <Link to="/cart" className="flex items-center gap-2">
          <span className="text-white">0</span>
          <FaShoppingCart />
        </Link>
      </div>
      <div>
        <Link to="/login">
          <FaUser />
        </Link>
      </div>
    </div>
  );
};
