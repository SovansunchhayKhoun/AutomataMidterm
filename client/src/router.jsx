import React from "react"
import {useNavigate, createBrowserRouter, useRouteError} from "react-router-dom"
import {Layout} from './layout/Layout'
import { LandingPage } from "./views/LandingPage"
import { ExerciseUI } from "./views/ExerciseUI"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <LandingPage />
      },
      {
        path: '/final',
        element: <ExerciseUI />
      }
    ]
  },
])

export default router
