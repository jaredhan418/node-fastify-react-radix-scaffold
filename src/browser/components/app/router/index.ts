import { Router, RootRoute, Route } from "@tanstack/react-router";

import { Home } from "../../home/index.js";
import { Table } from "../../table/index.js";

const rootRoute = new RootRoute({
  component: Home,
});

const taleRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/table",
  component: Table,
});

const routeTree = rootRoute.addChildren([taleRoute]);

// Create the router using your route tree
export const router = new Router({ routeTree });
