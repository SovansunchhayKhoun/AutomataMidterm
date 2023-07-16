import React, { useContext } from 'react'
import { UtilContext } from '../context/UtilContext'

export const LandingPage = () => {
  const {apiData, apiDataIsLoading} = useContext(UtilContext);
  return (
    <main>
      {apiDataIsLoading && <div>Loading...</div>}
      {apiData && apiData?.map((data, key) => {
        return (
          <div key={key}>
            {data}
          </div>
        )
      })}
    </main>
  )
}
