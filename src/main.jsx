import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee/AddCoffee.jsx";
import Coffee from "./components/Coffee/Coffee.jsx";
import Update from "./components/Update/Update.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import AuthProvider, { AuthContext } from "./AuthProvider/AuthProvider.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import MainLayOut from "./components/MainLayOut/MainLayOut.jsx";
import User from "./components/User/User.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <AddCoffee></AddCoffee>,
      },

      {
        path: "/coffee",
        element: <Coffee></Coffee>,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/updateCoffee/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/singIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/singUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/user",
        element: <User></User>,
        loader: () => fetch("http://localhost:5000/user"),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
