import React, { useContext } from 'react'
import { MainContext } from '../../context/MainContext'

export const NumStates = () => {
  const {fa, generateStates, error} = useContext(MainContext);
  const {faStates} = fa;
  return ( 
    <>
    {/* get number of states */}
    <label htmlFor="state">State: </label>
    <div className='flex flex-col gap-1'>
      <input 
        value={faStates.length || 0 }
        min={"0"} type="number" required
        max={"5"}
        onChange={event => {
          generateStates(event)
        }}
        className="border-2 border-[#3B82F6] px-2 py-1 w-full" id="state" placeholder='Number of States...' />
      <div>
        Your states: [ {faStates?.map((fs, key) => {
          return <span key={key}>{fs.state}{faStates.length - 1 !== fs.index && ', '}</span>
        })} ]
      </div>
      <span className='text-red-500 text-xs'>{error && error.stateError}</span>
    </div>
    </>
  )
}
