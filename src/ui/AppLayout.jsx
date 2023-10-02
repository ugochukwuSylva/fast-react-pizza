import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import LoadingSpinner from "./LoadingSpinner";

function AppLayout() {
  const isLoading = useNavigation();

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading.state === "loading" && <LoadingSpinner />}

      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
