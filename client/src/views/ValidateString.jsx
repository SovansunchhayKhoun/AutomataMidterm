import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'

export const ValidateString = () => {
  const {fa, handleString, inputString, validateString} = useContext(MainContext);
  const {transitionSets} = fa;
  return (
    <main>
      <div>
        {transitionSets?.map(set => {
              return (
                set.map((s, key) => {
                  return (
                    <div key={key}>
                      {s.transitState}&nbsp;transition&nbsp;
                      {s.transitAlphabet}&nbsp;
                      =&nbsp;{s.transitResult}
                    </div>
                  )
                })
              )
            })}
      </div>
      <label htmlFor="">Input String: </label>
      <input onKeyDown={({key}) => {
        key === 'Enter' && validateString()
      }} value={inputString} onChange={handleString} type="text" placeholder='Enter string...'/>
      <div>
        Your result:
      </div>
    </main> 
  )
}
