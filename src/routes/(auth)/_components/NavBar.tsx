import { NavLink } from "react-router";
import { Icons } from "~/components/icons";

const NavBar = () => {
  return (
    <nav className="h-12 flex items-center justify-center">
      <NavLink to="/auth">
        <Icons.Logo className="h-5 w-min" />
      </NavLink>
    </nav>
  );
};

export default NavBar;
