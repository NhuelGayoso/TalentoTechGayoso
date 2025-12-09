import { Link } from "react-router-dom";

export const Logo = ({ subtitle = "Shop" }) => {
  return (
    <Link to="/" className="flex items-center whitespace-nowrap">
      <span className="font-monserrat font-bold text-xl m-0 whitespace-nowrap">
        Pesca |
      </span>
      <p className="text-muted-foreground m-0 px-2 whitespace-nowrap">
        {subtitle}
      </p>
    </Link>
  );
};
