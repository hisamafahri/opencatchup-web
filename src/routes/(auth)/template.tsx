import { Outlet } from "react-router";
import NavBar from "./_components/NavBar";

const AuthTemplate = () => {
  return (
    <main className="h-full min-h-screen flex flex-col">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default AuthTemplate;
