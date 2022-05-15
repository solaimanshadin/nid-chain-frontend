import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/AuthGuard/PrivateRoute";
import Home from "./pages/Home";
import Dashboard from "./dashboard/layout/DefaultLayout";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />

          {/* <PrivateRoute path="/dashboard" element={Dashboard} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
