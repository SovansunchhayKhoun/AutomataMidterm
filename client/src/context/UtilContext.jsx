import React, { createContext, useState } from 'react'
import Axios from "axios"
import {useQuery} from "@tanstack/react-query"
Axios.defaults.baseURL = import.meta.env.VITE_APP_URL;

console.log(import.meta.env.VITE_APP_URL)

export const UtilContext = createContext(); 
export const UtilProvider = ({children}) => {
  const [navBarSelect, setNavBarSelect] = useState('Construct DFA');
  
  return (
    <UtilContext.Provider value={{ 
      navBarSelect,
      setNavBarSelect
     }}>
      {children}
     </UtilContext.Provider>
  )
}
