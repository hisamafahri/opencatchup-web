import { Outlet, useNavigate } from "react-router";
import NavBar from "./_components/NavBar";
import { useSession } from "~/lib/utils/auth";
import React from "react";
import Loading from "~/components/common/Loading";

const AuthTemplate = () => {
  const navigate = useNavigate();
  const { data, isPending } = useSession();

  React.useEffect(() => {
    if (!isPending && data?.session?.token) {
      navigate("/");
    }
  }, [data, isPending]);

  if (isPending) {
    return <Loading fullScreen />;
  }

  return (
    <main className="h-full min-h-screen flex flex-col">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default AuthTemplate;
