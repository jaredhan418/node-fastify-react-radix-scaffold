import React from "react";
import { Link, Outlet } from "@tanstack/react-router";

export function Home() {
  return (
    <div>
      <h3>Welcome Home!</h3>
      <Link to="/table">
        <strong>Table</strong>
      </Link>

      <Outlet />
    </div>
  );
}
