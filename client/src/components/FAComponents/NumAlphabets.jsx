import React, { useContext } from 'react'
import { MainContext } from '../../context/MainContext'

export const NumAlphabets = () => {
  const { fa, generateAlphabets, error, adjustEpsilon } = useContext(MainContext);
  const { faAlphabets } = fa;

  return (
    <>
      {/* get number of alphabets */}
      <label htmlFor="alphabet">Alphabet: </label>
      <div>
        <input required
          onChange={event => {
            generateAlphabets(event)
          }}
          value={faAlphabets.length || 0}
          min="0"
          max="5"
          className="border-2 border-[#3B82F6] px-2 py-1 w-full"
          type="number" id="alphabet" placeholder='Number of Alphabets' />
        <div>
          Your Alphabets: [ {faAlphabets?.map((fa, key) => {
            return <span key={key}> {fa.alphabet}{faAlphabets.length - 1 !== fa.index && ', '}</span>
          })} ]
        </div>
        {faAlphabets.length > 0 && (
          <div className='flex gap-1 items-center'>
            <input onChange={(event) => adjustEpsilon(event)} className='border-2 border-blue-500' type="checkbox" />
            <label htmlFor="">Include Epsilon?</label>
          </div>
        )}
        <span className='text-red-500 text-xs'>{error && error.alphabetError}</span>
      </div>
    </>
  )
}
