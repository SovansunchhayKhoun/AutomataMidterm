import React, { useContext } from 'react'
import { MainContext } from '../../context/MainContext'

export const StartState = () => {
  const {fa, handleStartState} = useContext(MainContext);
  const {faStates, faStartState} = fa;
  if(faStates.length > 0) {
    return (
      <div className='h-full p-4 border-2 rounded-tl-md rounded-tr-md border-blue-500 w-full shadow-lg flex flex-col gap-2 justify-center'>
        <div className='flex gap-2 items-center'>
          <div>
            Start State
          </div>
          <select onChange={handleStartState}>
            {faStates?.filter(fs => fs !== 'Trap').map((fs, key) => {
              return (
                <option className={"px-12 text-lg"} value={fs} key={key}>{fs}</option>
              )
            })}
          </select>
        </div>
        <div>
          Your Start State: {faStartState}
        </div>
      </div>
    )
  }
}
