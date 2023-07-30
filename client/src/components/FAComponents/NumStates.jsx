import React, {useContext} from 'react'
import {MainContext} from '../../context/MainContext'

export const NumStates = () => {
  const {fa, generateStates, error} = useContext(MainContext);
  const {faStates} = fa;
  return (
    <div
      className='h-full p-4 border-2 rounded-tl-md rounded-tr-md border-blue-500 w-full shadow-lg flex flex-col gap-2 justify-center'>
      {/* get number of states */}
      <label className={"flex gap-1 items-center"} htmlFor="state">
        <span>State:</span>
        <input
          value={faStates.length || 0}
          min={"0"} type="number" required
          max={"5"}
          onChange={event => {
            generateStates(event)
          }}
          className="border-2 border-blue-500 px-2 py-1 w-full" id="state" placeholder='Number of States...'/>
      </label>
      <div className='flex flex-col gap-2'>
        <div>
          Your States [ {faStates?.map((fs, key) => {
          return <span key={key}>{fs}{faStates.length - 1 !== key && ', '}</span>
        })} ]
        </div>
      </div>
      <div>
        <span className={`${error ? 'text-red-500 text-xs' : 'hidden'}`}>{error && error.nfaError}</span>
        <span className={`${error ? 'text-red-500 text-xs' : 'hidden'}`}>{error && error.stateError}</span>
      </div>
    </div>
  )
}
