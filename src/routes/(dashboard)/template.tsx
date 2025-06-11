import React from "react";
import { Outlet, useNavigate } from "react-router";

const DashboardTemplate = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/login");
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default DashboardTemplate;
