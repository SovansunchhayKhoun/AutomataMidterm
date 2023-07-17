import React from "react"
import {useNavigate, createBrowserRouter, useRouteError} from "react-router-dom"
import {Layout} from './layout/Layout'
import { ExerciseUI } from "./views/ExerciseUI"
import { ConstructFa } from "./views/ConstructFa"
import { MinimizedDfa } from "./views/MinimizedDfa"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <ConstructFa/>
      },
      {
        path: '/minimized',
        element: <MinimizedDfa/>
      },
      {
        path: 'final',
        element: <ExerciseUI/>
      }
    ]
  },
])

export default router
