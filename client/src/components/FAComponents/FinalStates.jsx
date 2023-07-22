import React, {useContext} from 'react'
import {MainContext} from '../../context/MainContext'

export const FinalStates = () => {
  const {fa, handleFinalState} = useContext(MainContext)
  const {faStates, faFinalStates} = fa;
  if (faStates.length > 0) {
    return (
      <div
        className={'h-full p-4 border-2 rounded-tl-md rounded-tr-md border-blue-500 w-full shadow-lg flex flex-col gap-2 justify-center'}>
        <div>
          Final State
        </div>
        <div className='grid grid-cols-3 gap-1'>
          {faStates?.filter(fs => fs !== 'Trap').map((fs, key) => {
            return (
              <div key={key} className='flex gap-1 items-center'>
                <input type="checkbox" onChange={(event) => {
                  handleFinalState(event)
                }} value={fs} id={fs}/>
                <label htmlFor={fs}>{fs}</label>
              </div>
            )
          })}
        </div>
        <div>
          {faFinalStates?.length > 0 && 'Your Final State: '}
          {faFinalStates?.map((fss, key) => (
            <span key={key}>{fss}{faFinalStates.length - 1 !== key && ', '}</span>
          ))}
        </div>
      </div>
    )
  }

}
