import React, {useContext, useEffect, useRef} from 'react'
import {MainContext} from '../context/MainContext'
import {DFATransitionTable} from '../components/FAComponents/DFATransitionTable.jsx';
import {NumStates} from '../components/FAComponents/NumStates';
import {NumAlphabets} from '../components/FAComponents/NumAlphabets';
import {StartState} from '../components/FAComponents/StartState';
import {FinalStates} from '../components/FAComponents/FinalStates';
import {TransitionDiagram} from "../components/FAComponents/TransitionDiagram.jsx";
import {NFATransitionTable} from "../components/FAComponents/NFATransitionTable.jsx";
import {useNavigate} from "react-router-dom";

export const ConstructFa = () => {
  const {submitForm, nfa} = useContext(MainContext);
  let navigate = useNavigate();
  const stateRef = useRef(null);

  return (
    <main className='flex flex-col gap-4'>
      <section className="w-full">
        <div className={'flex flex-col gap-4'}>
          <div className={'h-full flex gap-4 w-full'}>
            <div className='w-full grid grid-cols-4 gap-4'>
              {/* get number of states */}
              <NumStates/>

              {/* get number of alphabets */}
              <NumAlphabets/>

              {/* get start state */}
              <StartState/>

              {/* get final state */}
              <FinalStates/>
            </div>
          </div>
          {/* generate transition table */}
          <div className={"flex flex-col gap-4 w-full"}>
            {nfa ? <NFATransitionTable/> : <DFATransitionTable/>}
              <TransitionDiagram/>
          </div>
        </div>
      </section>
      <button className={"transition duration-200 w-fit bg-blue-500 text-white px-2 py-1 rounded-md " +
        "hover:bg-blue-600"} onClick={() => {
        submitForm()
        // navigate('/validate')
      }}>
        Submit
      </button>

    </main>
  )
}
