import React from "react"
import {useNavigate, createBrowserRouter, useRouteError} from "react-router-dom"
import {Layout} from './layout/Layout'
import { ConstructFa } from "./views/ConstructFa"
import { MinimizedDfa } from "./views/MinimizedDfa"
import { ErrorPage } from "./views/ErrorPage";
import { Classify } from "./views/Classify"
import { ValidateString } from "./views/ValidateString"

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
        path: '/classify',
        element: <Classify />
      },
      {
        path: '/validate',
        element: <ValidateString />
      },
      {
        path: '*',
        element: <ErrorPage />
      },
    ]
  },
])

export default router
