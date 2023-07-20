import React, { useContext } from 'react'
import { MainContext } from '../../context/MainContext'

export const StartState = () => {
  const {fa, handleStartState} = useContext(MainContext);
  const {faStates, faStartState} = fa;
  return (
    <>
      {/* get start state */}
      {faStates.length > 0 && (
        <>
          <div>
            Start State
          </div>
          <div>
            <select onChange={handleStartState}>
              {faStates?.filter(fs => fs.state !== 'Trap').map((fs, key) => {
                return (
                  <option value={fs.state} key={key}>{fs.state}</option>
                ) 
              })}
            </select>
            <div>
            Your Start State: {faStartState}
            </div>
          </div>
        </>
      )}
    </>
  )
}
