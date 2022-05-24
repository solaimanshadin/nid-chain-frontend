import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

// add nid
const AddNid = React.lazy(() => import("./views/pages/nid/add-nid/AddNid"));

const routes = [
  // { path: '/', exact: true, name: 'Home' },
  { path: "/", name: "Dashboard", element: Dashboard },
  { path: "/add-nid", name: "Add NID", element: AddNid },
];

export default routes;
