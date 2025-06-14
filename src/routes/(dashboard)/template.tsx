import React from "react";
import { Outlet, useNavigate } from "react-router";
import Loading from "~/components/common/Loading";
import { useSession } from "~/lib/utils/auth";
import NavBar from "./_components/NavBar";

const DashboardTemplate = () => {
  const navigate = useNavigate();
  const { data, isPending } = useSession();

  React.useEffect(() => {
    if (!isPending && !data?.session?.token) {
      navigate("/login");
    }
  }, [data, isPending]);

  return (
    <main className="h-full min-h-screen flex flex-col">
      <NavBar />
      {isPending ? <Loading /> : <Outlet />}
    </main>
  );
};

export default DashboardTemplate;
