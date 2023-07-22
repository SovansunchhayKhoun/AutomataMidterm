import React, {useContext, useEffect, useRef} from 'react'
import {MainContext} from '../context/MainContext'
import {TransitionTable} from '../components/FAComponents/TransitionTable';
import {NumStates} from '../components/FAComponents/NumStates';
import {NumAlphabets} from '../components/FAComponents/NumAlphabets';
import {StartState} from '../components/FAComponents/StartState';
import {FinalStates} from '../components/FAComponents/FinalStates';
import {TransitionDiagram} from "../components/FAComponents/TransitionDiagram.jsx";

export const ConstructFa = () => {
  const {submitForm} = useContext(MainContext);
  return (
    <main className='flex flex-col gap-4'>
      <section className="w-full">
        <div className={'flex flex-col gap-4'}>
          <div className={'h-full flex gap-4 w-full'}>
            <div className='grid grid-cols-2 auto-rows-fr auto-cols-fr w-1/2 gap-4'>
              {/* get number of states */}
              <NumStates/>

              {/* get number of alphabets */}
              <NumAlphabets/>

              {/* get start state */}
              <StartState/>

              {/* get final state */}
              <FinalStates/>
            </div>
            <div className={"flex-1"}>
              <TransitionDiagram/>
            </div>
          </div>
          {/* generate transition table */}
          <div className={"w-full"}>
            <TransitionTable/>
          </div>
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
