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
import Settings from "../pages/Settings/Settings";
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
            path="/settings"
            element={authCtx.isLogin ? <Settings /> : <Navigate to="/login" />}
          />
        </Routing>
      </Layout>
    </Router>
  );
};

export default Routes;
