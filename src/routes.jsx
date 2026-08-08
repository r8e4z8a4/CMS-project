import { createBrowserRouter } from "react-router";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home/page";
import Products from "./pages/Products/page";
import Users from "./pages/Users/page";
import Tickets from "./pages/Tickets/page";
import TicketDetails from "./pages/TicketDetails/page";
import Comments from "./pages/Comments/page";
import NotFound from "./pages/NotFound/page";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "users",
                element: <Users />,
            },
            {
                path: "tickets",
                element: <Tickets />,
            },
            {
                path: "tickets/:id",
                element: <TicketDetails />,
            },
            {
                path: "comments",
                element: <Comments />,
            },
        ],
    },
    {
      path: "*",
      element: <NotFound />,
    }
],{basename:"/CMS-project",});
export default routes;
