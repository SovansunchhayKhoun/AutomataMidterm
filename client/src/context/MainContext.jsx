import React, { createContext, useState, useRef, useEffect } from 'react'

export const MainContext = createContext();
export const MainProvider = ({ children }) => {
  // Notes
  // when input a -> q1   
  // b -> q2 (f-state) if(the end of the string is q2, it is acceptable)
  // if q2 meets a -> q1 ( not acceptable )
  // if meets b again then b -> q2 (acceptable)

  // // state -> state that is being transitioned
  // const [faStates, setFaStates] = useState([]);
  // // alphabet -> alphabet that causes the transition
  // const [faAlphabets, setFaAlphabets] = useState([]);
  const [error, setError] = useState({});
  const [rows, setRows] = useState(1);
  const [cols, setCols] = useState(1);

  // // set of transitions
  // const [transitionSets, setTransitionSets] = useState(
  //   Array.from({ length: rows }, (_, rowIndex) => Array.from({ length: cols }, (_, colIndex) => {
  //     return {
  //       transitState: `q${rowIndex}`,
  //       transitAlphabet: String.fromCharCode(colIndex + 65),
  //       transitResult: 'q0'
  //     }
  //   }))
  // );

  // fa definitions
  const [fa, setFa] = useState({
    faStates: [],
    faAlphabets: [],
    faStartState: '',
    faFinalStates: [],
    transitionSets: Array.from({ length: rows }, (_, rowIndex) => Array.from({ length: cols }, (_, colIndex) => {
      return {
        transitState: `q${rowIndex}`,
        transitAlphabet: String.fromCharCode(colIndex + 65),
        transitResult: 'q0'
      }
    })),
  });

  const clearFaState = () => {
    // setFaStates(faStates.splice(0, faStates.length));
    setFa({
      ...fa,
      faStates: fa.faStates.splice(0, fa.faStates.length), faStartStates: [], faFinalStates: []
    });
  }

  const clearTransition = () => {
    fa.transitionSets = Array.from({ length: rows }, (_, rowIndex) => Array.from({ length: cols }, (_, colIndex) => {
      return {
        transitState: `q${rowIndex}`,
        transitAlphabet: String.fromCharCode(colIndex + 65),
        transitResult: 'q0'
      }
    }))

    setFa({ ...fa })

    // setTransitionSets(transitionSets);
  }

  const [trapCheck, setTrapCheck] = useState(false);

  const adjustTrap = (nfa) => {
    if (nfa && fa.faStates.some((fa) => fa.state === 'Trap')) {
      setError({ ...error, nfaError: 'Cannot Set Trap if FA is Non-Deterministic' })
      fa.faStates.splice(fa.faStates.indexOf('Trap'), 1);
      // setFaStates([...faStates]);
      setFa({ ...fa });
      setTrapCheck(false);
    }
    
    if (!nfa) {
      // add trap
      if (!trapCheck) {
        fa.faStates.push(`Trap`)
        // setFaStates(faStates);
        setFa({ ...fa });
        // clearTransition();
        setTrapCheck(true);
      } else {
        // remove trap
        fa.faStates.splice(fa.faStates.indexOf('Trap'), 1);
        // setFaStates([...faStates]);
        setFa({ ...fa });
        clearTransition();
        setTrapCheck(false);
      }
    }
  }

  const generateStates = (event) => {
    setError({ ...error, stateError: '' });
    clearFaState();
    clearTransition();

    // setFaStates(faStates);
    setFa({ ...fa });

    // if 0 clear states
    if (Number(event.target.value) <= 0) {
      clearFaState();
    }

    if (Number(event.target.value) > 0 && Number(event.target.value) <= 5) {
      setRows(Number(event.target.value));
      // set rows and columns

      // setTransitionSets(
      //   Array.from({ length: Number(event.target.value) }, (_, rowIndex) => Array.from({ length: cols }, (_, colIndex) => {
      //     return {
      //       transitState: `q${rowIndex}`,
      //       transitAlphabet: String.fromCharCode(colIndex + 65),
      //       transitResult: `q0`
      //     }
      //   }))
      // )

      for (let i = 0; i < Number(event.target.value); i++) {
        fa.faStates.push(`q${i}`)

        // setFaStates(faStates)
        fa.transitionSets =  Array.from({ length: Number(event.target.value) }, (_, rowIndex) => Array.from({ length: cols }, (_, colIndex) => {
          return {
            transitState: `q${rowIndex}`,
            transitAlphabet: String.fromCharCode(colIndex + 65),
            transitResult: `q0`
          }
        }))

        // update state
        setFa({
          ...fa, faStartState: `q0`,
          
        })
      }
    } else if (Number(event.target.value) >= 6) {
      setError({ ...error, stateError: 'Cannot exceed 5 states' })
      clearFaState();
    }
  }

  const [epsilonCheck, setEpsilonCheck] = useState(false);
  const [nfa, setNfa] = useState(false);

  const adjustEpsilon = () => {
    // remove epsilon
    setError({ ...error, nfaError: '' })
    if (epsilonCheck) {
      const index = fa.faAlphabets.indexOf('$');
      fa.faAlphabets.splice(index, 1);
      setEpsilonCheck(false);
      // setFaAlphabets([...faAlphabets])
      setFa({ ...fa })
      setNfa(false);
      clearTransition();
    }
    // add epsilon
    if (!epsilonCheck) {
      setEpsilonCheck(true)
      fa.faAlphabets.push('$')
      
      fa.transitionSets = Array.from({ length: rows }, (_, rowIndex) => Array.from({ length: fa.faAlphabets.length }, (_, colIndex) => {
        return {
          transitState: `q${rowIndex}`,
          transitAlphabet: colIndex !== fa.faAlphabets.length-1 ? String.fromCharCode(colIndex + 65) : '$',
          transitResult: `q0`
        }
      }))
        
      setNfa(true);
      // setFaAlphabets(faAlphabets)
      adjustTrap(true);
      setFa({ ...fa })
    }
  }

  const clearAlphabets = () => {
    // setFaAlphabets(faAlphabets.splice(0, faAlphabets.length));
    setFa({ ...fa, faAlphabets: [] });
  }

  const generateAlphabets = (event) => {
    setError({ ...error, alphabetError: '' });
    clearAlphabets();
    clearTransition();
    // if 0 clear alphabets
    if (Number(event.target.value) <= 0) {
      // setFaAlphabets([]);
      setFa({ ...fa, faAlphabets: [] });
    }

    if (Number(event.target.value) > 0 && Number(event.target.value) <= 5) {
      setCols(Number(event.target.value));
      fa.transitionSets = Array.from({ length: rows }, (_, rowIndex) => Array.from({ length: Number(event.target.value) }, (_, colIndex) => {
        return {
          transitState: `q${rowIndex}`,
          transitAlphabet: String.fromCharCode(colIndex + 65),
          transitResult: `q0`
        }
      }))

      // setFa({...fa, transitionSets});
      for (let i = 0; i < event.target.value; i++) {
        fa.faAlphabets.push(String.fromCharCode(i + 65))
        // setFaAlphabets(faAlphabets)
        setFa({ ...fa });
      }
    } else if (Number(event.target.value) >= 6) {
      setError({ ...error, alphabetError: 'Cannot exceed 5 alphabets' })
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

  const handleTransition = (event, state, alphabet) => {

    const { value } = event.target;
    const { row, transitState } = state;
    const { col, transitAlphabet } = alphabet;

    console.log(`Row: ${row}, Col: ${col}, value: ${value}`);
    
    fa.transitionSets[row][col] = {transitState, transitAlphabet, transitResult: value};

    // value === '$' && setNfa(true);

    setFa({ ...fa });

  }

  const [inputString, setInputString] = useState('');

  const handleString = (event) => {
    const {faAlphabets} = fa;
    const {value} = event.target;
    setInputString(value);
  }

  const validateString = () => {
    // const {transitionSet} = fa;
    console.log(fa.transitionSets); 
    console.log(inputString);
  }

  const submitForm = () => {
    const {faStates, faAlphabets, faStartState, faFinalStates, transitionSets} = fa;
    console.log("Start state: ")
    console.log(faStartState)
    console.log("States set: ")
    console.log(faStates)
    console.log("Alphabets set: ")
    console.log(faAlphabets)
    console.log("Transitions set: ")
    console.log(transitionSets)
    console.log("Final states: ")
    console.log(faFinalStates)
  }

  return (
    <MainContext.Provider value={{
      inputString,
      setInputString,
      handleString,
      validateString,
      epsilonCheck,
      setEpsilonCheck,
      trapCheck,
      setTrapCheck,
      nfa,
      setNfa,
      adjustTrap,
      setRows,
      setCols,
      handleTransition,
      adjustEpsilon,
      error,
      setError,
      handleFinalState,
      fa,
      setFa,
      handleStartState,
      // faAlphabets,
      // setFaAlphabets,
      generateAlphabets,
      // faStates,
      // setFaStates,
      generateStates,
      submitForm,
    }}>
      {children}
    </MainContext.Provider>
  )
}
