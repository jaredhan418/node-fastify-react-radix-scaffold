import React from "react";
import { createBrowserRouter } from "react-router";

import { Home } from "../../home/index.js";
import { Table } from "../../table/index.js";

// Create the router using your route tree
export const router = createBrowserRouter([
  {
    children: [
      {
        element: <Table />,
        path: "/table",
      },
    ],
    element: <Home />,
    path: "/",
  },
]);
