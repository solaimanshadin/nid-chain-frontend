import React from "react";
import CIcon from "@coreui/icons-react";
import { cilSpeedometer } from "@coreui/icons";
import { CNavGroup, CNavItem } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    role: ["ec"],
  },
  {
    component: CNavGroup,
    name: "NID",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    role: ["ec"],
    items: [
      {
        component: CNavItem,
        name: "Add NID",
        to: "/dashboard/add-nid",
      },
      {
        component: CNavItem,
        name: "All NIDs",
        to: "/dashboard/all-nids",
      },
    ],
  },
];

export default _nav;
