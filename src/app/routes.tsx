import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Order } from "./pages/Order";
import { Merch } from "./pages/Merch";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "menu", Component: Menu },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "order", Component: Order },
      { path: "merch", Component: Merch },
    ],
  },
]);