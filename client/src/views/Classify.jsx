import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'

export const Classify = () => {
  const { fa, nfa } = useContext(MainContext);
  const { faStates, faAlphabets, faStartState, faFinalStates } = fa;

  return (
    <section className='flex flex-col gap-2'>
      <div className='flex'>
        <p className='font-semibold'>Your States Q:&nbsp;</p>
        <p>
          {faStates?.map((fs, key) => {
            return (
              <span key={key}>{fs.state} {faStates.length - 1 !== key && ', '}</span>
            )
          })}
        </p>
      </div>
      <div className='flex'>
        <p className='font-semibold'>Your Alphabets:&nbsp;</p>
        <p>
          {faAlphabets?.map((fa, key) => {
            return (
              <span key={key}>
                {fa.alphabet}{faAlphabets.length - 1 !== key && ', '}
              </span>
            )
          })}
        </p>
      </div>

      <div>
        <span className='font-semibold'>Start State:</span> {faStartState}
      </div>
      <div className='flex'>
        <p className='font-semibold'>
          Final state: &nbsp;
        </p>
        <p>
          {faFinalStates?.map((ffs, key) => {
            return (
              <span key={key}>{ffs}{faFinalStates.length - 1 !== key && ', '}</span>
            )
          })}
        </p>
      </div>
      <div className='bg-cyan-300 px-12 py-2 text-white rounded-sm'>
        <span>{`This is ${nfa ? 'an' : 'not an'} nfa`}</span>
      </div>
    </section>
  )
}
