import React, { createContext, useEffect, useState } from 'react'

export const MinimizedContext = createContext();
export const MinimizedProvider = ({ children }) => {
  
  const [states,setStates] = useState([])
  const [alphabets,setAlphabets] = useState([])

  //dfa components
  const [dfa,setDfa] = useState({
    states: [],
    alphabets: [],
    startState: [],
    finalStates: [],
  })
  const generateStates = (amountState = 1) => {
    //clear all states from the array
    while(states.length>0){
      states.pop()
      setDfa({...dfa,states})
    }

    //insert all states to array
    for(let i=0;i<amountState;i++){
      setStates(states,states.push(`q${i}`))
      setDfa({...dfa,states})
    }
  }

  const generateAlphabets = (amountAlphabet = 1) => {
    //clear all alphabets from the array
    while(alphabets.length>0){
      alphabets.pop()
      setDfa({...dfa,alphabets})
    }
    //insert all alphabets to array
    for(let i=0;i<amountAlphabet;i++){
      setAlphabets(alphabets,alphabets.push(`${i}`))
      setDfa({...dfa,alphabets})
    }
  }

  const handleStartState = (event) => {
    const { value, checked } = event.target;   
    if (!checked) {
      // remove one start state
      const index = dfa.startState.indexOf(value);
      dfa.startState.splice(index, 1);
    } else {
      if(!dfa.startState.includes(value)) {
        dfa.startState.push(value)
      }
    }
    setDfa({...dfa})
  }

  const handleFinalState = (event) => {
    const { value, checked } = event.target;
    if (!checked) {
      // remove one start state
      const index = dfa.finalStates.indexOf(value);
      dfa.finalStates.splice(index, 1);
    } else {
      if(!dfa.finalStates.includes(value)) {
        dfa.finalStates.push(value)
      }
    }
    setDfa({...dfa})
  }

  return (
    <MinimizedContext.Provider value={{
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
    }}>
      {children}
    </MinimizedContext.Provider>
  )
}
