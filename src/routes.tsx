import { Routes as LibRoutes, Route } from "react-router";
import AuthTemplate from "~/routes/(auth)/template";
import DashboardTemplate from "~/routes/(dashboard)/template";
import AuthLogin from "./routes/(auth)/login";
import AuthRegister from "./routes/(auth)/register";
import AuthForgetPassword from "./routes/(auth)/forget-password";
import AuthResetPassword from "./routes/(auth)/reset-password";
import Home from "./routes/(dashboard)/(bookings)";
import EventOptions from "./routes/(dashboard)/options";
import Availabilities from "./routes/(dashboard)/availabilities";
import SettingsAccount from "./routes/(dashboard)/settings/account";
import SettingsTemplate from "./routes/(dashboard)/settings/template";
import SettingsCalendar from "./routes/(dashboard)/settings/calendars";
import SettingsConferencing from "./routes/(dashboard)/settings/conferencing";
import SettingsDeveloper from "./routes/(dashboard)/settings/developer";
import SettingsBilling from "./routes/(dashboard)/settings/billing";

const Routes = () => {
  return (
    <LibRoutes>
      <Route element={<AuthTemplate />}>
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/register" element={<AuthRegister />} />
        <Route path="/forget-password" element={<AuthForgetPassword />} />
        <Route path="/reset-password" element={<AuthResetPassword />} />
      </Route>

      <Route element={<DashboardTemplate />}>
        <Route index element={<Home />} />
        <Route path="/event-options" element={<EventOptions />} />
        <Route path="/availabilities" element={<Availabilities />} />

        <Route element={<SettingsTemplate />}>
          <Route path="/settings/account" element={<SettingsAccount />} />
          <Route path="/settings/calendars" element={<SettingsCalendar />} />
          <Route
            path="/settings/conferencing"
            element={<SettingsConferencing />}
          />
          <Route path="/settings/developer" element={<SettingsDeveloper />} />
          <Route path="/settings/billing" element={<SettingsBilling />} />
        </Route>
      </Route>

      <Route path="*" element={<p>Not found!</p>} />
    </LibRoutes>
  );
};

export default Routes;
