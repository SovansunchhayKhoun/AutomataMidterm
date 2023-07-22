import React, {useContext} from 'react'
import {MainContext} from '../../context/MainContext'

export const NumAlphabets = () => {
  const {fa, generateAlphabets, error, adjustEpsilon, epsilonCheck} = useContext(MainContext);
  const {faAlphabets} = fa;

  return (
    <div
      className='p-4 border-2 rounded-tl-md rounded-tr-md border-blue-500 w-full shadow-lg flex flex-col gap-2 justify-center'>
      {/* get number of alphabets */}
      <label className={"flex items-center gap-1"} htmlFor="alphabet">
        <span>Alphabet:</span>
        <input
          required
          onChange={event => {
            generateAlphabets(event)
          }}
          value={faAlphabets.length || 0}
          min="0"
          max="5"
          className="border-2 border-blue-500 px-2 py-1 w-full"
          type="number" id="alphabet" placeholder='Number of Alphabets'/>
      </label>
      <div className='flex flex-col gap-2'>
        <div>
          Your Alphabets: [ {faAlphabets?.map((fa, key) => {
          return <span key={key}> {fa}{faAlphabets.length - 1 !== key && ', '}</span>
        })} ]
        </div>
        {faAlphabets.length > 0 && (
          <div className='flex gap-1 items-center'>
            <input checked={epsilonCheck} onChange={(event) => adjustEpsilon(event)}
                   className='border-2 border-blue-500' type="checkbox"/>
            <label htmlFor="">Include Epsilon?</label>
          </div>
        )}
      </div>

    </div>
  )
}
