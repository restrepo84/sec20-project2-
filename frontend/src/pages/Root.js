import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

// import classes from './Root.module.css';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
