import React, { Children, createContext } from 'react'

export const MainContext = createContext();
export const MainProvider = ({children}) => {
  
  return (
    <MainContext.Provider value={{ 
      
     }}>
      {children}
     </MainContext.Provider>
  )
}
