import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {RouterProvider} from "react-router-dom"
import router from "./router.jsx"
import './index.css'
import { UtilProvider } from './context/UtilContext.jsx'

const client = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <UtilProvider>
        <RouterProvider router={router} />
      </UtilProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)