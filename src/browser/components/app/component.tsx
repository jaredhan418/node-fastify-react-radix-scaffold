import React from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "./router/index.js";

export function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
