import { useEffect, useContext, useState } from "react";

import { MinimizedContext } from "../context/MinimizedContext";
import { DfaTransitionTable } from "../components/DfaTransitionTable";
import { MinimizedTable } from "../components/MinimizeTable";

export const MinimizedDfa = () => {
  const {
    generateStates,
    states,
    dfa,
    generateAlphabets,
    alphabets,
    handleStartState,
    handleFinalState,
    initializeTransitionTable,
    handleSubmit
  } = useContext(MinimizedContext);
  useEffect(() => {
    generateAlphabets();
    generateStates();
  }, []);

  const [isHidden,setIsHidden] = useState(false)
  if(!isHidden){
    return (
      <main className="flex gap-4">
      <section className="w-full">
        <div className="grid grid-cols-2 gap-4 w-1/2 items-center">
          {/* get number of states */}
          <label htmlFor="state">Number of States: </label>
          <div className="flex flex-col gap-1">
            <input
              min={1}
              defaultValue={1}
              type="number"
              required
              max={5}
              onChange={(event) => {
                generateStates(event.target.value);
                initializeTransitionTable(event.target.value, alphabets.length);
              }}
              className="border-2 border-[#3B82F6] px-2 py-1 w-full"
              id="state"
            />
            <div>
              Your states: [{" "}
              {states?.map((state, key) => {
                return (
                  <span key={key}>
                    {state}
                    {states.length - 1 !== key && ", "}
                  </span>
                );
              })}{" "}
              ]
            </div>
          </div>

          {/* get number of alphabets */}
          <label htmlFor="alphabet">Number of Alphabets: </label>
          <div>
            <input
              required
              min="1"
              defaultValue="1"
              onChange={(event) => {
                generateAlphabets(event.target.value);
                initializeTransitionTable(states.length, event.target.value);
              }}
              max="5"
              className="border-2 border-[#3B82F6] px-2 py-1 w-full"
              type="number"
              id="alphabet"
            />
            <div>
              Your Alphabets: [{" "}
              {alphabets?.map((alphabet, key) => {
                return (
                  <span key={key}>
                    {" "}
                    {alphabet}
                    {alphabets.length - 1 !== key && ", "}
                  </span>
                );
              })}{" "}
              ]
            </div>
          </div>

          {/* get start state */}
          {states.length > 0 && (
            <>
              <div>Start State</div>
              <div>
                <div className="grid grid-cols-5 gap-1">
                  {states?.map((state, key) => {
                    return (
                      <div key={key} className="flex gap-1 items-center">
                        <input
                          type="checkbox"
                          onChange={(event) => {
                            handleStartState(event);
                          }}
                          value={state}
                          id={state}
                        />
                        <label htmlFor={state}>{state}</label>
                      </div>
                    );
                  })}
                </div>
                <div>
                  Your Start State:{" "}
                  {dfa.startState?.map((startState, key) => (
                    <span key={key}>
                      {startState}
                      {dfa.startState.length - 1 !== key && ", "}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* get final state */}
          {states.length > 0 && (
            <>
              <div>Final State</div>
              <div>
                <div className="grid grid-cols-5 gap-1">
                  {states?.map((state, key) => {
                    return (
                      <div key={key} className="flex gap-1 items-center">
                        <input
                          type="checkbox"
                          onChange={(event) => {
                            handleFinalState(event);
                          }}
                          value={state}
                          id={state}
                        />
                        <label htmlFor={state}>{state}</label>
                      </div>
                    );
                  })}
                </div>
                <div>
                  Your Final State:{" "}
                  {dfa.finalStates?.map((finalState, key) => (
                    <span key={key}>
                      {finalState}
                      {dfa.finalStates.length - 1 !== key && ", "}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}

          <label htmlFor="">Transition Table</label>
          <DfaTransitionTable />
        </div>
        


        <button
          onClick={() => {
            handleSubmit()
          }}
        >
          Submit
        </button>
      </section>
    </main>
    )
  }else{
    return(
      <MinimizedTable/>
    )
  }
};
