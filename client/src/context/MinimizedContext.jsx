import React, { createContext, useEffect, useState } from "react";

export const MinimizedContext = createContext();
export const MinimizedProvider = ({ children }) => {
  const [states, setStates] = useState([]);
  const [alphabets, setAlphabets] = useState([]);
  const [transitionTable, setTransitionTable] = useState(
    Array.from({ length: 1 }, () => Array.from({ length: 1 }, () => "q0"))
  );
  const [transitions,setTransitions]= useState([{
    states: 'q0',
    transitions: []
  }])
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
        setTransitions,
      }}
    >
      {children}
    </MinimizedContext.Provider>
  );
};
