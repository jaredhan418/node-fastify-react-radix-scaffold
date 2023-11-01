import React from "react";
import { RouterProvider } from "@tanstack/react-router";

import { router } from "./router/index.js";

export function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
