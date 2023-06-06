// React imports
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

// Import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Import routers
import { RouterProvider } from "react-router-dom";
import privateRouter, { PrivateRouter } from "./router/private";
import publicRouter, { PublicRouter } from "./router/public";

// Import store
import { Provider } from "react-redux";
import privateStore, { PrivateStore } from "./redux/private";
import publicStore, { PublicStore } from "./redux/public";

const Main = () => {
  const [router, setRouter] = useState<PrivateRouter | PublicRouter>(
    localStorage.getItem("APP_ROUTER") === "private"
      ? publicRouter
      : publicRouter
  );

  const [store, setStore] = useState<PrivateStore | PublicStore>(
    localStorage.getItem("APP_ROUTER") === "private"
      ? privateStore
      : publicStore
  );

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "APP_ROUTER") {
        setRouter(e.newValue === "private" ? privateRouter : publicRouter);
        setStore(e.newValue === "private" ? privateStore : publicStore);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(<Main />);
