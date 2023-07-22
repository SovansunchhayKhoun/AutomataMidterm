import React, { createContext, useState, useRef, useEffect } from 'react'

export const MainContext = createContext();
export const MainProvider = ({ children }) => {
  // Notes
  // when input a -> q1   
  // b -> q2 (f-state) if(the end of the string is q2, it is acceptable)
  // if q2 meets a -> q1 ( not acceptable )
  // if meets b again then b -> q2 (acceptable)

  // state -> state that is being transitioned
  const [faStates, setFaStates] = useState([]);
  // alphabet -> alphabet that causes the transition
  const [faAlphabets, setFaAlphabets] = useState([]);
  const [error, setError] = useState({});
  const [rows, setRows] = useState(1);
  const [cols, setCols] = useState(1);

  // set of transitions
  const [transitionSets, setTransitionSets] = useState(
    Array.from({ length: rows }, (_, rowIndex) => Array.from({ length: cols }, (_, colIndex) => {
      return {
        transitState: `q${rowIndex}`,
        transitAlphabet: String.fromCharCode(colIndex + 65),
        transitResult: 'q0'
      }
    }))
  );

  // fa definitions
  const [fa, setFa] = useState({
    faStates: [],
    faAlphabets: [],
    faStartState: '',
    faFinalStates: [],
    transitionSets,
  });

  const clearFaState = () => {
    setFaStates(faStates.splice(0, faStates.length));
    setFa({
      ...fa,
      faStates: faStates.splice(0, faStates.length), faStartStates: [], faFinalStates: []
    });
  }

  const clearTransition = () => {
    console.log('called')
    fa.transitionSets = Array.from({ length: rows }, (_, rowIndex) => Array.from({ length: cols }, (_, colIndex) => {
        return {
          transitState: `q${rowIndex}`,
          transitAlphabet: String.fromCharCode(colIndex + 65),
          transitResult: 'q0'
        }
      }))

    setFa({ ...fa })

    setTransitionSets(transitionSets);
  }

  const [trapCheck, setTrapCheck] = useState(false);

  const adjustTrap = (nfa) => {
    if (nfa && faStates.some((fa) => fa.state === 'Trap')) {
      
      setError({ ...error, nfaError: 'Cannot Set Trap if FA is Non-Deterministic' })
      faStates.splice(faStates.indexOf('Trap'), 1);
      setFaStates([...faStates]);
      setFa({ ...fa, faStates });
      setTrapCheck(false);
    }
    
    if (!nfa) {
      // add trap
      if (!trapCheck) {
        faStates.push(`Trap`)
        setFaStates(faStates);
        setFa({ ...fa, faStates });
        // clearTransition();
        setTrapCheck(true);
      } else {
        // remove trap
        faStates.splice(faStates.indexOf('Trap'), 1);
        setFaStates([...faStates]);
        setFa({ ...fa, faStates });
        clearTransition();
        setTrapCheck(false);
      }
    }
  }

  const generateStates = (event) => {
    setError({ ...error, stateError: '' });
    clearFaState();
    clearTransition();

    setFaStates(faStates);
    setFa({ ...fa, faStates });

    // if 0 clear states
    if (Number(event.target.value) <= 0) {
      clearFaState();
    }

    if (Number(event.target.value) > 0 && Number(event.target.value) <= 5) {
      setRows(Number(event.target.value));
      // set rows and columns
      setTransitionSets(
        Array.from({ length: Number(event.target.value) }, (_, rowIndex) => Array.from({ length: cols }, (_, colIndex) => {
          return {
            transitState: `q${rowIndex}`,
            transitAlphabet: String.fromCharCode(colIndex + 65),
            transitResult: `q0`
          }
        }))
      )

      for (let i = 0; i < Number(event.target.value); i++) {
        faStates.push(`q${i}`)

        setFaStates(faStates)

        // update state
        setFa({
          ...fa, faStates, faStartState: `q0`,
          transitionSets: Array.from({ length: Number(event.target.value) }, (_, rowIndex) => Array.from({ length: cols }, (_, colIndex) => {
            return {
              transitState: `q${rowIndex}`,
              transitAlphabet: String.fromCharCode(colIndex + 65),
              transitResult: `q0`
            }
          }))
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
      const index = faAlphabets.indexOf('$');
      faAlphabets.splice(index, 1);
      setEpsilonCheck(false);
      setFaAlphabets([...faAlphabets])
      setFa({ ...fa, faAlphabets })
      setNfa(false);
      clearTransition();
    }
    // add epsilon
    if (!epsilonCheck) {
      setEpsilonCheck(true)
      faAlphabets.push('$')
      setTransitionSets(
        Array.from({ length: rows }, (_, rowIndex) => Array.from({ length: faAlphabets.length }, (_, colIndex) => {
          return {
            transitState: `q${rowIndex}`,
            transitAlphabet: colIndex !== faAlphabets.length-1 ? String.fromCharCode(colIndex + 65) : '$',
            transitResult: `q0`
          }
        }))
        )
        
      setNfa(true);
      setFaAlphabets(faAlphabets)
      adjustTrap(true);
      setFa({
        ...fa, faAlphabets, 
        transitionSets: Array.from({ length: rows }, (_, rowIndex) => Array.from({ length: faAlphabets.length }, (_, colIndex) => {
          return {
            transitState: `q${rowIndex}`,
            transitAlphabet: colIndex !== faAlphabets.length-1 ? String.fromCharCode(colIndex + 65) : '$',
            transitResult: `q0`
          }
        }))
      })
    }
  }

  const clearAlphabets = () => {
    setFaAlphabets(faAlphabets.splice(0, faAlphabets.length));
    setFa({ ...fa, faAlphabets: [] });
  }

  const generateAlphabets = (event) => {
    setError({ ...error, alphabetError: '' });
    clearAlphabets();
    clearTransition();
    // if 0 clear alphabets
    if (Number(event.target.value) <= 0) {
      setFaAlphabets([]);
      setFa({ ...fa, faAlphabets });
    }

    if (Number(event.target.value) > 0 && Number(event.target.value) <= 5) {
      setCols(Number(event.target.value));
      setTransitionSets(
        Array.from({ length: rows }, (_, rowIndex) => Array.from({ length: Number(event.target.value) }, (_, colIndex) => {
          return {
            transitState: `q${rowIndex}`,
            transitAlphabet: String.fromCharCode(colIndex + 65),
            transitResult: `q0`
          }
        }))
      )
      // setFa({...fa, transitionSets});
      for (let i = 0; i < event.target.value; i++) {
        faAlphabets.push(String.fromCharCode(i + 65))
        setFaAlphabets(faAlphabets)
        setFa({
          ...fa, faAlphabets,
          transitionSets: Array.from({ length: rows }, (_, rowIndex) => Array.from({ length: Number(event.target.value) }, (_, colIndex) => {
            return {
              transitState: `q${rowIndex}`,
              transitAlphabet: String.fromCharCode(colIndex + 65),
              transitResult: `q0`
            }
          }))
        });
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
    
    transitionSets[row][col] = {...transitionSets, transitState,      transitAlphabet, transitResult: value};

    value === '$' && setNfa(true);

    setFa({ ...fa, transitionSets});

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
    console.log(fa);
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
