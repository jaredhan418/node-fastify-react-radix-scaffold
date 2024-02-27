import { Theme } from "@radix-ui/themes";
import React from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "./router/index.js";

export function App() {
  return (
    <React.StrictMode>
      <Theme>
        <RouterProvider router={router} />
      </Theme>
    </React.StrictMode>
  );
}
