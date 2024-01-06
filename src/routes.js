import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import DataTables from "views/admin/tables";

// Icon Imports
import {
  MdHome,
  MdBarChart,
  MdDoorbell,
  MdOutlineAdminPanelSettings
} from "react-icons/md";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Kriteria",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdBarChart className="h-6 w-6" />,
    component: <DataTables />
  },
  {
    name: "Alternatif",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Bobot Kriteria",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Nilai Alternatif",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Perangkingan",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Notifikasi",
    layout: "/admin",
    path: "profile",
    icon: <MdDoorbell className="h-6 w-6" />,
    component: <DataTables />,
  },
  {
    name: "Setting",
    layout: "/admin",
    path: "profile",
    icon: <MdOutlineAdminPanelSettings className="h-6 w-6" />,
    component: <DataTables />,
  },

];
export default routes;
