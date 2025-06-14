import { Outlet } from "react-router";
import SettingsNavBar from "./_components/SettingsNavBar";

const SettingsTemplate = () => {
  return (
    <main className="h-full flex-1 flex flex-col">
      <SettingsNavBar />
      <Outlet />
    </main>
  );
};

export default SettingsTemplate;
