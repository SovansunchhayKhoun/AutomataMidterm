import React from "react"
import {useNavigate, createBrowserRouter, useRouteError} from "react-router-dom"
import {Layout} from './layout/Layout'
import { LandingPage } from "./views/LandingPage"
import { MinimizedDfa } from "./views/MinimizedDfa"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <LandingPage/>
      },
      {
        path: '/minimized',
        element: <MinimizedDfa/>
      }
    ]
  },
])

export default router
