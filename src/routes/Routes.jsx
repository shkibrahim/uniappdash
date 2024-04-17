import React from "react";
import {
  BrowserRouter as Router,
  Routes as Routing,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Layout from "../components/Layout/Layout";
import auth from "../proxyState/auth";
import { useSnapshot } from "valtio";
import Login from "../pages/Auth/login/Login";
import Rides from "../pages/Rides/index";
import Users from "../pages/Users/index";
import Driver from "../pages/Driver/Driver";
import Settings from "../pages/Settings/Settings.jsx";
import Reports from "../pages/Reports/Reports.jsx";
import Support from "../pages/Support/Support.jsx";
import Notification from "../pages/Notification/Notification.jsx";
import DriverDetails from "../components/DriverDetails/DriverDetails.jsx";
import DriverInformation from "../components/DriverInformation/DriverInformation.jsx";
const Routes = () => {
  const authCtx = useSnapshot(auth);
  return (
    <Router>
      <Layout>
        <Routing>
          <Route
            path="/login"
            element={authCtx.isLogin ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/"
            element={authCtx.isLogin ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/rides"
            element={authCtx.isLogin ? <Rides /> : <Navigate to="/login" />}
          />
          <Route
            path="/users"
            element={authCtx.isLogin ? <Users /> : <Navigate to="/login" />}
          />
          <Route
            path="/drivers"
            // element={authCtx.isLogin ? <Driver /> : <Navigate to="/login" />}
            element={
              authCtx.isLogin ? <DriverInformation /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/reports"
            element={authCtx.isLogin ? <Reports /> : <Navigate to="/login" />}
          />

          <Route
            path="/support"
            element={authCtx.isLogin ? <Support /> : <Navigate to="/login" />}
            // element={
            //   authCtx.isLogin ? <DriverDetails /> : <Navigate to="/login" />
            // }
          />
          <Route
            path="/notifications"
            element={
              authCtx.isLogin ? <Notification /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/settings"
            element={authCtx.isLogin ? <Settings /> : <Navigate to="/login" />}
          />
        </Routing>
      </Layout>
    </Router>
  );
};

export default Routes;
