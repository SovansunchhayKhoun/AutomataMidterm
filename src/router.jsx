import React from "react"
import {useNavigate, createBrowserRouter, useRouteError, Navigate} from "react-router-dom"
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
        element: <ConstructFa /> ,
        errorElement: <ErrorPage />
      },
      {
        path: '/minimized',
        element: <MinimizedDfa/> ,
        errorElement: <ErrorPage />
      },
      {
        path: '/classify',
        element: <Classify />,
        errorElement: <ErrorPage />
      },
      {
        path: '/validate',
        element: <ValidateString />,
        errorElement: <ErrorPage />
      },
      {
        path: '*',
        element: <ErrorPage />
      },
    ]
  },
])

export default router
