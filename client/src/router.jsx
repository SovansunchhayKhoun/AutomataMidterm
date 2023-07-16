import React from "react"
import {useNavigate, createBrowserRouter, useRouteError} from "react-router-dom" 
import {App} from './App'
import {Layout} from './layout/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <App />
      }
    ]
  },
])

export default router
