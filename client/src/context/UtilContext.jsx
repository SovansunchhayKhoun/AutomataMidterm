import React, { createContext } from 'react'

export const UtilContext = createContext(); 
export const UtilProvider = ({children}) => {
  return (
    <UtilContext.Provider value={{ 
     }}>
      {children}
     </UtilContext.Provider>
  )
}
