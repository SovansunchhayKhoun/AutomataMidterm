import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'

export const Classify = () => {
  const { fa } = useContext(MainContext);
  const { faStates, faAlphabets, faStartStates, faFinalStates } = fa;

  return (
    <section className='flex flex-col'>
      <div>
        State:
        {faStates?.map((fs, key) => {
          return (
            <div key={key}>{fs.state}</div>
          )
        })}
      </div>
      <div>
        Alphabet:
        {faAlphabets?.map((fa, key) => {
          return (
            <div key={key}>
              {fa.alphabet}
            </div>
          )
        })}
      </div>

      <div>
        Start State: {faStartStates}
        {/* {faStartStates?.map((fss, key) => {
          return (
            <div key={key}>{fss}</div>
          )
        })} */}
      </div>
      <div>
        Final state
        {faFinalStates?.map((ffs, key) => {
          return (
            <div key={key}>{ffs}</div>
          )
        })}
      </div>
    </section>
  )
}
