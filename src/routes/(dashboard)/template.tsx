import React from "react";
import { Outlet, useNavigate } from "react-router";
import Loading from "~/components/common/Loading";
import { useSession } from "~/lib/utils/auth";

const DashboardTemplate = () => {
  const navigate = useNavigate();
  const { data, isPending } = useSession();

  React.useEffect(() => {
    if (!isPending && !data?.session?.token) {
      navigate("/login");
    }
  }, [data, isPending]);

  if (isPending) {
    return <Loading fullScreen />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default DashboardTemplate;
