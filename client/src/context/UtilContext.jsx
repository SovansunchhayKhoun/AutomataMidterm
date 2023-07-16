import React, { createContext } from 'react'
import Axios from "axios"
import {useQuery} from "@tanstack/react-query"
Axios.defaults.baseURL = import.meta.env.VITE_APP_URL;

console.log(import.meta.env.VITE_APP_URL)

export const UtilContext = createContext(); 
export const UtilProvider = ({children}) => {
  const {data: apiData, refetch: apiDataReFetch, isLoading: apiDataIsLoading} = useQuery(['apiData'], () => {
    return Axios.get('/api').then(({data}) => {
      return data.data;
    })
  } )
  
  return (
    <UtilContext.Provider value={{ 
      apiData,
      apiDataIsLoading,
      apiDataReFetch,
     }}>
      {children}
     </UtilContext.Provider>
  )
}
