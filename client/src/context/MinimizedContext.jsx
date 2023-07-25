import React, { createContext, useEffect, useState } from "react";

export const MinimizedContext = createContext();
export const MinimizedProvider = ({ children }) => {
  const [states, setStates] = useState([]);
  const [alphabets, setAlphabets] = useState([]);
  const [transitionTable, setTransitionTable] = useState(
    Array.from({ length: 1 }, () => Array.from({ length: 1 }, () => "q0"))
  );
  const transitions = []
  let inaccessibleState = []
  const initializeTransitionTable = (row, column, value = "q0") => {
    setTransitionTable(
      Array.from({ length: row }, () =>
        Array.from({ length: column }, () => value)
      )
    );
    setDfa({
      ...dfa,
      transitions: Array.from({ length: row }, () =>
        Array.from({ length: column }, () => value)
      ),
    });
  };

  const handleTransistionTable = (row, column, value) => {
    //temporary copy from transitionTable
    let copy = [...transitionTable];
    //change value
    copy[row][column] = value;
    //update transitionTable value
    setTransitionTable(copy);
    setDfa({ ...dfa, transitions: copy });
  };
  //dfa components
  const [dfa, setDfa] = useState({
    states: states,
    alphabets: alphabets,
    startState: [],
    finalStates: [],
    amountState: states.length,
    amountAlphabet: alphabets.length,
    transitions: transitionTable,
  });
  const generateStates = (amountState = 1) => {
    //clear all states from the array
    while (states.length > 0) {
      states.pop();
      setDfa({ ...dfa, states: states, amountState: states.length });
    }

    //insert all states to array
    for (let i = 0; i < amountState; i++) {
      setStates(states, states.push(`q${i}`));
      setDfa({ ...dfa, states: states, amountState: states.length });
    }
  };

  const generateAlphabets = (amountAlphabet = 1) => {
    //clear all alphabets from the array
    while (alphabets.length > 0) {
      alphabets.pop();
      setDfa({
        ...dfa,
        alphabets: alphabets,
        amountAlphabet: alphabets.length,
      });
    }
    //insert all alphabets to array
    for (let i = 0; i < amountAlphabet; i++) {
      setAlphabets(alphabets, alphabets.push(`${i}`));
      setDfa({
        ...dfa,
        alphabets: alphabets,
        amountAlphabet: alphabets.length,
      });
    }
  };

  const handleStartState = (event) => {
    const { value, checked } = event.target;
    if (!checked) {
      // remove one start state
      const index = dfa.startState.indexOf(value);
      dfa.startState.splice(index, 1);
    } else {
      if (!dfa.startState.includes(value)) {
        dfa.startState.push(value);
      }
    }
    setDfa({ ...dfa });
  };

  const handleTransitions = () => {
    while(transitions.length > 0){
      transitions.pop()
    }
    for (let i = 0; i < states.length; i++) {
      const transition = {
        state: states[i],
        transition: transitionTable[i],
      };
      transitions.push(transition);
    }
    console.log(transitions);
  }

  const findInaccessibleState = () => {
    while(inaccessibleState.length > 0){
      inaccessibleState.pop()
    }
    //state
    let i = 0;
    let j,k
    while (i<states.length){
      //row
      for(j=0;j<states.length;j++){
        //column
        for( k=0;k<alphabets.length;k++){
          if(states[i] == transitionTable[j][k]){
            console.log(`state: ${states[i]} transitions: ${alphabets[k]} result: ${transitionTable[j][k]}`)
            j=states.length
            break
          }
        }
      }
      if(j===states.length && k===alphabets.length){
        console.log(states[i])
        inaccessibleState.push(states[i])
        
      }
      i++
      
    }
    console.log(inaccessibleState)
  }
 
  const handleSubmit = () => {
    handleTransitions()
    findInaccessibleState()
  }

  const handleFinalState = (event) => {
    const { value, checked } = event.target;
    if (!checked) {
      // remove one start state
      const index = dfa.finalStates.indexOf(value);
      dfa.finalStates.splice(index, 1);
    } else {
      if (!dfa.finalStates.includes(value)) {
        dfa.finalStates.push(value);
      }
    }
    setDfa({ ...dfa });
  };

  return (
    <MinimizedContext.Provider
      value={{
        states,
        setStates,
        alphabets,
        setAlphabets,
        generateStates,
        generateAlphabets,
        setDfa,
        dfa,
        handleStartState,
        handleFinalState,
        transitionTable,
        setTransitionTable,
        handleTransistionTable,
        initializeTransitionTable,
        transitions,
        handleSubmit,
        handleTransitions,
        findInaccessibleState
      }}
    >
      {children}
    </MinimizedContext.Provider>
  );
};
