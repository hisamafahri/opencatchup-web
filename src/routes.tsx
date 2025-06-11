import { Routes as LibRoutes, Route } from "react-router";
import AuthTemplate from "~/routes/(auth)/template";
import DashboardTemplate from "~/routes/(dashboard)/template";
import Home from "~/routes/(dashboard)";
import AuthLogin from "./routes/(auth)/login";
import AuthRegister from "./routes/(auth)/register";

const Routes = () => {
  return (
    <LibRoutes>
      <Route element={<AuthTemplate />}>
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/register" element={<AuthRegister />} />
      </Route>

      <Route element={<DashboardTemplate />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="*" element={<p>Not found!</p>} />
    </LibRoutes>
  );
};

export default Routes;
