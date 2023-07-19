import React, { useContext } from 'react'
import { MainContext } from '../../context/MainContext'

export const FinalStates = () => {
  const {fa, handleFinalState} = useContext(MainContext)
  const {faStates, faFinalStates} = fa;
  return ( 
    <>
      {/* get final state */}
      {faStates.length > 0 && (
            <>
              <div>
                Final State
              </div>
              <div>
                <div className='grid grid-cols-5 gap-1'>
                  {faStates?.map((fs, key) => {
                    return (
                      <div key={key} className='flex gap-1 items-center'>
                        <input type="checkbox" onChange={(event) => {
                          handleFinalState(event)
                        }} value={fs.state} id={fs.state} />
                        <label htmlFor={fs.state}>{fs.state}</label>
                      </div>
                    )
                  })}
                </div>
                <div>
                  Your Final State: {faFinalStates?.map((fss, key) => (
                    <span key={key}>{fss}{faFinalStates.length - 1 !== key && ', '}</span>
                  ))}
                </div>
              </div>
            </>
          )}
    </>
  )
}
