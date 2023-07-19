import React, { createContext, useState, useRef } from 'react'

export const MainContext = createContext();
export const MainProvider = ({ children }) => {
  
  // Notes
  // when input a -> q1 
  //               b -> q2 (f-state) if(the end of the string is q2, it is acceptable)
  //               if q2 meets a -> q1 ( not acceptable )
  //               if meets b again then b -> q2 (acceptable)

  // fa definitions
  const [fa, setFa] = useState({
    faStates: [],
    faAlphabets: [],
    faStartState: '',
    faFinalStates: []
  });

  const [faStates, setFaStates] = useState([]);
  const [faAlphabets, setFaAlphabets] = useState([]);
  const [error, setError] = useState({});
  // state -> state that is being transitioned
  // alphabet -> alphabet that causes the transition
  // result -> set of states after the transition

  const [transition, setTransition] = useState({
    state: '',
    alphabet: '',
    result: [],
  });
  
  // set of transitions
  const [transtionSets, setTransitionSets] = useState([]);

  const clearFaState = () => {
    setFaStates(faStates.splice(0, faStates.length));
    setFa({ ...fa, 
      faStates: faStates.splice(0, faStates.length), faStartStates:[], faFinalStates: [] });
  }

  const generateStates = (event) => {
    setError({...error, stateError: ''});
    clearFaState();
    // if 0 clear states
    if (Number(event.target.value) <= 0) {
      clearFaState();
    }

    if (Number(event.target.value) > 0 && Number(event.target.value) <= 5) {
      for (let i = 0; i < Number(event.target.value); i++) {
        faStates.push({
          index: i,
          state: `q${i}`
        })
        
        setFaStates(faStates)
        setFa({ ...fa, faStates, faStartState: `q0` })
      }
    } else if(Number(event.target.value) >= 6) {
      setError({...error, stateError: 'Cannot exceed 5 states'})
      clearFaState();
    }
  }

  const adjustEpsilon = (event) => {
    // remove epsilon
    if (!event.target.checked) {
      const index = faAlphabets.indexOf('$');
      faAlphabets.splice(index, 1);
      setFaAlphabets([...faAlphabets])
      setFa({ ...fa, faAlphabets })
    }
    // add epsilon
    if (event.target.checked) {
      faAlphabets.push({
        index: faAlphabets.length,
        alphabet: '$',
      })
      setFaAlphabets(faAlphabets)
      setFa({ ...fa, faAlphabets })
    }
  }

  const clearAlphabets = () => {
    setFaAlphabets(faAlphabets.splice(0, faAlphabets.length));
    setFa({...fa, faAlphabets: []});
  }

  const generateAlphabets = (event) => {
    setError({...error, alphabetError: ''});
    clearAlphabets();

    // if 0 clear alphabets
    if (Number(event.target.value) <= 0) {
      setFaAlphabets([]);
      setFa({ ...fa, faAlphabets });
    }

    if (Number(event.target.value) > 0 && Number(event.target.value) <= 5) {
      for (let i = 0; i < event.target.value; i++) {
        faAlphabets.push({
          index: i,
          alphabet: String.fromCharCode(i + 65), // convert num to char
        })
        setFaAlphabets(faAlphabets)
        setFa({ ...fa, faAlphabets });
      }
    } else if(Number(event.target.value) >= 6) {
      setError({...error, alphabetError: 'Cannot exceed 5 alphabets'})
      clearAlphabets(event)
    }
  }

  const handleStartState = (event) => {
    const { value } = event.target;
    setFa({ ...fa, faStartState: value });
  }

  const handleFinalState = (event) => {
    const { value, checked } = event.target;
    if (!checked) {
      // remove one state
      const index = fa.faFinalStates.indexOf(value);
      fa.faFinalStates.splice(index, 1);
    } else {
      if (!fa.faFinalStates.includes(value)) {
        fa.faFinalStates.push(value)
      }
    }
    setFa({ ...fa })
  }

  const handleTransition = (event) => {
    const {value} = event.target;
    console.log(value)
  }

  const submitForm = () => {
    console.log(fa);
  }

  return (
    <MainContext.Provider value={{
      handleTransition, 
      adjustEpsilon,
      error,
      setError,
      handleFinalState,
      fa,
      setFa,
      handleStartState,
      faAlphabets,
      setFaAlphabets,
      generateAlphabets,
      faStates,
      setFaStates,
      generateStates,
      submitForm,
    }}>
      {children}
    </MainContext.Provider>
  )
}
