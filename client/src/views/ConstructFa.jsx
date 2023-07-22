import React, {useContext, useEffect, useRef} from 'react'
import {MainContext} from '../context/MainContext'
import {TransitionTable} from '../components/FAComponents/TransitionTable';
import {NumStates} from '../components/FAComponents/NumStates';
import {NumAlphabets} from '../components/FAComponents/NumAlphabets';
import {StartState} from '../components/FAComponents/StartState';
import {FinalStates} from '../components/FAComponents/FinalStates';
import {TransitionDiagram} from "../components/FAComponents/TransitionDiagram.jsx";

export const ConstructFa = () => {
  const {submitForm, fa, error} = useContext(MainContext);
  return (
    <main className='flex flex-col gap-4'>
      <section className="w-full">
        <div className={'flex flex-col gap-3'}>
          <div className={'flex  gap-4'}>
            <div className='flex flex-col gap-6 w-1/2'>
              <div className='flex gap-3'>
                {/* get number of states */}
                <div className={"w-full"}>
                  <NumStates/>
                  {error && <span className='text-red-500 text-xs'>{error.nfaError}</span>}
                  {error && <span className='text-red-500 text-xs'>{error.stateError}</span>}
                </div>

                {/* get number of alphabets */}
                <div className={"w-full"}>
                  <NumAlphabets/>
                  <span className='text-red-500 text-xs'>{error && error.alphabetError}</span>
                </div>
              </div>
              <div className='flex gap-3'>
                {/* get start state */}
                <StartState/>
                {/* get final state */}
                <FinalStates/>
              </div>
            </div>
            <div className={"flex-1"}>
              <TransitionDiagram/>
            </div>
          </div>
          {/* generate transition table */}
          <TransitionTable/>
        </div>
      </section>
      <button className={"transition duration-200 w-fit bg-blue-500 text-white px-2 py-1 rounded-md " +
        "hover:bg-blue-600"} onClick={() => {
        submitForm()
      }}>
        Submit
      </button>

    </main>
  )
}
