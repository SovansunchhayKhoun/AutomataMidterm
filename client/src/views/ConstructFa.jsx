import React, { useContext, useEffect, useRef } from 'react'
import { MainContext } from '../context/MainContext'
import { TransitionTable } from '../components/FAComponents/TransitionTable';
import { NumStates } from '../components/FAComponents/NumStates';
import { NumAlphabets } from '../components/FAComponents/NumAlphabets';
import { StartState } from '../components/FAComponents/StartState';
import { FinalStates } from '../components/FAComponents/FinalStates';

export const ConstructFa = () => {
  const { submitForm, fa } = useContext(MainContext);
  const {transitionSets} = fa;
  return (
    <main className='flex gap-4'>

      <section className="w-full">
        <div className='grid grid-cols-2 gap-4 w-1/2 items-center'> 
          {/* get number of states */}
          <NumStates />

          {/* get start state */}
          <StartState />

          {/* get final state */}
          <FinalStates />
          
          {/* get number of alphabets */}
          <NumAlphabets />
          
          {/* {fa.faAlphabets.include(fa => fa.alphabet === '$') ? '' : ''} */}
          {/* generate transition table */}
          <TransitionTable />

          <div>
        {transitionSets?.map(set => {
          return (
            set.map((s, key) => {
              return (
                <div key={key}>
                  {s.transitState}&nbsp;
                  transition&nbsp;
                  {s.transitAlphabet}&nbsp;
                   = {s.transitResult}
                </div>
              )
            })
          )
        })}
      </div>
        </div>

        <button onClick={() => {submitForm()}}>
          Submit
        </button>
      </section>

    </main>
  )
}
