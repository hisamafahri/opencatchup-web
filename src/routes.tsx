import { Routes as LibRoutes, Route } from "react-router";
import AuthTemplate from "~/routes/(auth)/template";
import Auth from "~/routes/(auth)";
import DashboardTemplate from "~/routes/(dashboard)/template";
import Home from "~/routes/(dashboard)";

const Routes = () => {
  return (
    <LibRoutes>
      <Route element={<AuthTemplate />}>
        <Route path="/auth" element={<Auth />} />
      </Route>

      <Route element={<DashboardTemplate />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="*" element={<p>Not found!</p>} />
    </LibRoutes>
  );
};

export default Routes;
