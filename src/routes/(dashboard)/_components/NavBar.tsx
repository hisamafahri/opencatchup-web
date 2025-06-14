import { NavLink, useLocation } from "react-router";
import { Icons } from "~/components/icons";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import UserDropdown from "./UserDropdown";

type NavBarItemProps = {
  title: string;
  to: string;
};
const NavBarItem = ({ title, to }: NavBarItemProps) => {
  const loc = useLocation();
  const isActive = loc.pathname === to;

  return (
    <Button
      asChild
      size="sm"
      variant={isActive ? "secondary" : "ghost"}
      className={cn(isActive)}
    >
      <NavLink to={to}>{title}</NavLink>
    </Button>
  );
};

const NavBar = () => {
  return (
    <nav className="h-12 border-b border-border flex items-center">
      <div className="max-w-7xl w-full mx-auto flex items-center h-full">
        <NavLink to="/" className="mr-8">
          <Icons.Logo className="h-5 w-min" />
        </NavLink>

        <div className="flex flex-1 items-center gap-2">
          <NavBarItem title="Bookings" to="/" />
          <NavBarItem title="Event Options" to="/event-options" />
          <NavBarItem title="Availability" to="/availabilities" />
        </div>

        <UserDropdown />
      </div>
    </nav>
  );
};

export default NavBar;
