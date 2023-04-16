import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, Outlet, redirect, RouterProvider} from "react-router-dom";
import LoginPage from "./pages/login";
import Dashboard from "./pages/dashboard";
import UserContextProvider from "./store/UserContext";
import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <UserContextProvider>
        <Outlet/>
      </UserContextProvider>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "*",
        loader: () => redirect('/')
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
