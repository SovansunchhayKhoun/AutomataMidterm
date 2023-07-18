import React, { useContext, useEffect, useRef } from 'react'
import { MainContext } from '../context/MainContext'
import { TransitionTable } from '../components/TransitionTable';

export const ConstructFa = () => {
  const { 
    fa, submitForm, faStates, faAlphabets, handleStartState, handleFinalState, generateStates, generateAlphabets } = useContext(MainContext);

  return (
    <main className='flex flex-col gap-4'>
      <section>
        <div className='grid grid-cols-2 gap-4 w-1/2 items-center'>
          {/* get number of states */}
          <label htmlFor="state">State: </label>
          <div className='flex flex-col gap-1'>
            <input 
              min={0} type="number" required
              onChange={event => {
                generateStates(event)
              }}
              className="border-2 border-[#3B82F6] px-2 py-1 w-full" id="state" placeholder='Number of States...' />
            <div>
              Your states: [ {faStates?.map((fs, key) => {
                return <span key={key}>{fs.state}{faStates.length - 1 !== fs.index && ', '}</span>
              })} ]
            </div>
          </div>

          {/* get number of alphabets */}
          <label htmlFor="alphabet">Alphabet: </label>
          <div>
            <input required
              onChange={event => {
                generateAlphabets(event)
              }}
              min="0"
              max="26"
              className="border-2 border-[#3B82F6] px-2 py-1 w-full" 
              type="number" id="alphabet" placeholder='Number of Alphabets' />
            <div>
              Your Alphabets: [ {faAlphabets?.map((fa, key) => {
                return <span key={key}> {fa.alphabet}{faAlphabets.length - 1 !== fa.index && ', '}</span>
              })} ]
            </div>
            {faAlphabets.length > 0 && (
              <div className='flex gap-1 items-center'>
              <input onChange={(event) => generateAlphabets(event)} className='border-2 border-blue-500' type="checkbox" />
              <label htmlFor="">Include Epsilon?</label>
            </div>
            )}
            
          </div>

          {/* get start state */}
          {faStates.length > 0 && (
            <>
              <div>
                Start State
              </div>
              <div>
                <div className='grid grid-cols-5 gap-1'>
                  {faStates?.map((fs, key) => {
                    return (
                      <div key={key} className='flex gap-1 items-center'>
                        <input type="checkbox" onChange={(event) => {
                          handleStartState(event)
                        }} value={fs.state} id={fs.state} />
                        <label htmlFor={fs.state}>{fs.state}</label>
                      </div>
                    )
                  })}
                </div>
                <div>
                  Your Start State: {fa.faStartStates?.map((fss, key) => (
                    <span key={key}>{fss}{fa.faStartStates.length - 1 !== key && ', '}</span>
                  ))}
                </div>
              </div>
            </>
          )}

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
                  Your Final State: {fa.faFinalStates?.map((fss, key) => (
                    <span key={key}>{fss}{fa.faFinalStates.length - 1 !== key && ', '}</span>
                  ))}
                </div>
              </div>
            </>
          )}

          <label htmlFor="">Transition Table</label>
          <TransitionTable />
        </div>

        <button onClick={() => {submitForm()}}>
          Submit
        </button>
      </section>

    </main>
  )
}
