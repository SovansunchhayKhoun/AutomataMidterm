import React, { useContext, useEffect, useRef } from 'react'
import { MainContext } from '../context/MainContext'
import { TransitionTable } from '../components/FAComponents/TransitionTable';
import { NumStates } from '../components/FAComponents/NumStates';
import { NumAlphabets } from '../components/FAComponents/NumAlphabets';
import { StartState } from '../components/FAComponents/StartState';
import { FinalStates } from '../components/FAComponents/FinalStates';

export const ConstructFa = () => {
  const { submitForm } = useContext(MainContext);

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

          
          {/* generate transition table */}
          <TransitionTable />
        </div>

        <button onClick={() => {submitForm()}}>
          Submit
        </button>
      </section>

    </main>
  )
}
