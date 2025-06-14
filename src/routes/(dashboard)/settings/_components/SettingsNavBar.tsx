import { NavLink, useLocation } from "react-router";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

type SettingsNavBarItemProps = {
  title: string;
  to: string;
};
const SettingsNavBarItem = ({ title, to }: SettingsNavBarItemProps) => {
  const loc = useLocation();
  const isActive = loc.pathname === to;

  return (
    <Button
      asChild
      variant={isActive ? "ghost" : "ghost"}
      className={cn(isActive && "border-b border-primary rounded-none")}
    >
      <NavLink to={to}>{title}</NavLink>
    </Button>
  );
};

const SettingsNavBar = () => {
  return (
    <nav className="bg-muted border-b border-border">
      <div className="mx-auto w-full max-w-7xl">
        <SettingsNavBarItem title="Account" to="/settings/account" />
        <SettingsNavBarItem title="Calendars" to="/settings/calendars" />
        <SettingsNavBarItem title="Conferencing" to="/settings/conferencing" />
        <SettingsNavBarItem title="Developers" to="/settings/developer" />
        <SettingsNavBarItem title="Billing" to="/settings/billing" />
      </div>
    </nav>
  );
};

export default SettingsNavBar;
