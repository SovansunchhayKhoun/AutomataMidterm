import React from "react"
import {useNavigate, createBrowserRouter, useRouteError} from "react-router-dom"
import {Layout} from './layout/Layout'
import { LandingPage } from "./views/LandingPage"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <LandingPage />
      }
    ]
  },
])

export default router
