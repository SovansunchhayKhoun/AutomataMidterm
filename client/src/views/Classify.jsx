import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'

export const Classify = () => {
  const {fa} = useContext(MainContext);
  const {faStates, faAlphabets, faStartStates, faFinalStates} = fa;
  
  return (
    <div> 
      {faStates?.map((fs, key) => {
        return (
          <div key={key}>State: {fs.state}</div>
        )
      })}

      {faAlphabets?.map((fa, key) => {
        return (
          <div key={key}>
            Alphabet: {fa.alphabet}
          </div>
        )
      })}

      {faStartStates?.map((fss, key) => {
        return (
          <div key={key}>Start State: {fss}</div>
        )
      })}

      {faFinalStates?.map((ffs, key) => {
        return (
          <div key={key}>
            Final State: {ffs}
          </div>
        )
      })}

    </div>
  )
}
