import React, {createContext, useState, useRef, useEffect} from 'react'

export const MainContext = createContext();
export const MainProvider = ({children}) => {
  // Notes
  // when input a -> q1   
  // b -> q2 (f-state) if(the end of the string is q2, it is acceptable)
  // if q2 meets a -> q1 ( not acceptable )
  // if meets b again then b -> q2 (acceptable)

  const [error, setError] = useState({});
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);

  // fa definitions
  const [fa, setFa] = useState({
    faStates: [],
    faAlphabets: [],
    faStartState: '',
    faFinalStates: [],
    transitionSets: Array.from({length: rows}, (_, rowIndex) => Array.from({length: cols}, (_, colIndex) => {
      return {
        transitState: `q${rowIndex}`,
        transitAlphabet: String.fromCharCode(colIndex + 97),
        transitResult: 'q0',
        startState: true,
        finalState: true,
      }
    })),
  });

  const clearFaState = () => {
    setTrapCheck(false);
    setFa({
      ...fa, faStates: [], faStartStates: [], faFinalStates: []
    });
  }

  const clearTransition = () => {
    fa.transitionSets = Array.from({length: rows}, (_, rowIndex) => Array.from({length: cols}, (_, colIndex) => {
      return {
        transitState: `q${rowIndex}`,
        transitAlphabet: String.fromCharCode(colIndex + 97),
        transitResult: 'q0',
        startState: true,
        finalState: true
      }
    }))

    setFa({...fa})
  }

  const removeTraps = () => {
    const {transitionSets} = fa;
    transitionSets.forEach((ts) => {
      ts.forEach((set) => {
        set.transitResult = 'q0';
      })
    })
    setFa({...fa})
  }

  const [trapCheck, setTrapCheck] = useState(false);

  const adjustTrap = (nfa) => {
    if (nfa) {
      if (fa.faStates.some((fa) => fa === 'Trap')) {
        setError({...error, nfaError: 'Cannot Set Trap if FA is Non-Deterministic'})
        fa.faStates.splice(fa.faStates.indexOf('Trap'), 1);
        // setFaStates([...faStates]);
        setFa({...fa});
        setTrapCheck(false);
      }
    }

    if (!nfa) {
      // add trap
      if (!trapCheck) {
        fa.faStates.push(`Trap`)
        setFa({...fa});
        setTrapCheck(true);
      } else {
        // remove trap
        fa.faStates.splice(fa.faStates.indexOf('Trap'), 1);
        setFa({...fa});
        removeTraps();
        setTrapCheck(false);
      }
    }
  }

  const generateStates = (event) => {
    setError({...error, stateError: ''});
    clearFaState();
    clearTransition();
    setFa({...fa});

    // if 0 clear states
    if (Number(event.target.value) <= 0) {
      setRows(0);
      clearFaState();
    }

    if (Number(event.target.value) > 0 && Number(event.target.value) <= 5) {
      setRows(Number(event.target.value));
      // set rows and columns
      for (let i = 0; i < Number(event.target.value); i++) {
        // insert new states
        fa.faStates.push(`q${i}`)
        // update default transition values
        fa.transitionSets = Array.from({length: Number(event.target.value)}, (_, rowIndex) => Array.from({length: cols}, (_, colIndex) => {
          return {
            transitState: `q${rowIndex}`,
            transitAlphabet: String.fromCharCode(colIndex + 97),
            transitResult: `q0`,
            startState: `q${rowIndex}` === fa.faStartState,
            finalState: false
          }
        }))

        // update state
        setFa({
          ...fa, faStartState: `q0`, // set a default value for start state
        })
      }
    } else if (Number(event.target.value) >= 6) {
      setError({...error, stateError: 'Cannot exceed 5 states'})
      clearFaState();
      clearTransition();
    }
  }

  const [epsilonCheck, setEpsilonCheck] = useState(false);
  const [nfa, setNfa] = useState(false);

  const adjustEpsilon = () => {
    // remove epsilon
    setError({...error, nfaError: ''})
    if (epsilonCheck) {
      const index = fa.faAlphabets.indexOf('$');
      fa.faAlphabets.splice(index, 1);
      setEpsilonCheck(false);
      setFa({...fa})
      setNfa(false);
      clearTransition();
    }
    // add epsilon
    if (!epsilonCheck) {
      setEpsilonCheck(true)
      fa.faAlphabets.push('$')

      fa.transitionSets = Array.from({length: rows}, (_, rowIndex) => Array.from({length: fa.faAlphabets.length}, (_, colIndex) => {
        return {
          transitState: `q${rowIndex}`,
          transitAlphabet: colIndex !== fa.faAlphabets.length - 1 ? String.fromCharCode(colIndex + 97) : '$',
          transitResult: `q0`,
          startState: fa.faStartState === `q${rowIndex}`,
          finalState: fa.faFinalStates === `q${rowIndex}`
        }
      }))

      adjustTrap(true);
      setNfa(true);
      setFa({...fa})
    }
  }

  const clearFaAlphabets = () => {
    setEpsilonCheck(false);
    setNfa(false)
    setFa({...fa, faAlphabets: []});
  }

  const generateAlphabets = (event) => {
    setError({...error, alphabetError: ''});
    clearFaAlphabets();
    clearTransition();

    // if 0 clear alphabets
    if (Number(event.target.value) <= 0) {
      // setFa({...fa, faAlphabets: []});
      setCols(0);
      clearFaAlphabets();
    }

    if (Number(event.target.value) > 0 && Number(event.target.value) <= 5) {
      setCols(Number(event.target.value));

      for (let i = 0; i < event.target.value; i++) {
        // insert new alphabets
        fa.faAlphabets.push(String.fromCharCode(i + 97))
        // update default transition values
        fa.transitionSets = Array.from({length: rows}, (_, rowIndex) => Array.from({length: Number(event.target.value)}, (_, colIndex) => {
          return {
            transitState: `q${rowIndex}`,
            transitAlphabet: String.fromCharCode(colIndex + 97),
            transitResult: `q0`,
            startState: `q${rowIndex}` === fa.faStartState,
            finalState: fa.faFinalStates === `q${rowIndex}`
          }
        }))
        // update state
        setFa({...fa});
      }
    } else if (Number(event.target.value) >= 6) {
      setError({...error, alphabetError: 'Cannot exceed 5 alphabets'})
      clearFaAlphabets(event)
      clearTransition()
    }
  }

  const handleStartState = (event) => {
    const {value} = event.target;
    const {transitionSets} = fa;

    transitionSets.forEach(tr => {
      tr.forEach(set => {
        if (set.transitState !== value) {
          set.startState = false
        } else {
          set.startState = true;
        }
      })
    })

    setFa({...fa, faStartState: value});
  }

  const updateTrFinalState = () => {
    const {transitionSets, faFinalStates} = fa;
    faFinalStates.forEach(ffs => {
      transitionSets.forEach(tr => {
        tr.filter(set => set.transitState === ffs).forEach(set => set.finalState = true)
      })
    })
  }

  const removeTrFinalState = (value) => {
    const {transitionSets} = fa;
    transitionSets.forEach(tr => {
      tr.forEach(set => {
        if (set.transitState === value) {
          set.finalState = false;
        }
      })
    })
  }

  const handleFinalState = (event) => {
    const {value, checked} = event.target;
    const {faFinalStates} = fa;
    if (!checked) {
      // remove one state
      const index = faFinalStates.indexOf(value);
      faFinalStates.splice(index, 1);
      removeTrFinalState(value);
    } else {
      if (!faFinalStates.includes(value)) {
        faFinalStates.push(value)
        updateTrFinalState()
      }
    }
    setFa({...fa})
  }

  const handleTransition = (value, state, alphabet) => {

    // const {value} = event.target;
    const {row, transitState} = state;
    const {col, transitAlphabet} = alphabet;


    fa.transitionSets[row][col] = {
      transitState,
      transitAlphabet,
      transitResult: value,
      startState: fa.faStartState === fa.transitionSets[row][col].transitState,
      finalState: fa.faFinalStates.includes(fa.transitionSets[row][col].transitState)
    };

    value === '$' && setNfa(true);

    setFa({...fa});

  }

  const [inputString, setInputString] = useState('');

  const handleString = (event) => {
    setError({...error, stringError: ''})
    const {faAlphabets} = fa;
    const {value} = event.target;
    setInputString(value)

  }

  const checkString = () => {
    const {faAlphabets} = fa;
    let i = inputString.length - 1;
    let flag = true;
    while (i >= 0) {
      if (!faAlphabets.includes(inputString[i])) {
        return false;
      }
      i--;
    }
    return flag;
  }

  function getStartState() {
    const {transitionSets} = fa;
    let startState = [];
    transitionSets.forEach(tr => {
      tr.forEach(set => {
        if (set.startState) {
          startState.push(set);
        }
      })
    })
    return startState;
  }

  function getFinalState() {
    const {transitionSets} = fa;
    let finalState = [];
    transitionSets.forEach(tr => {
      tr.forEach(set => {
        if (set.finalState && !finalState.includes(set.transitState)) {
          finalState.push(set.transitState)
        }
      })
    })
    return finalState;
  }

  const findState = (resultState) => {
    const {transitionSets} = fa
    let result = [];
    transitionSets.forEach(tr => {
      tr.forEach(set => {
        if (set.transitState === resultState) {
          set.startState = true;
          result.push(set);
        } else {
          set.startState = false;
        }
      })
    })
    return result;
  }
  const [isAccepted, setIsAccepted] = useState(false);

  const validateFA = () => {
    if (fa.faFinalStates.length <= 0) {
      setError({...error, stringError: 'Missing Final States'});
      return;
    }

    if (!checkString()) {
      setError({...error, stringError: 'Some input alphabets are not included in your alphabet set'})
    } else {
      let i = 0;
      let newState = getStartState();
      let result;

      while (i <= inputString.length - 1) {
        // check if string alphabet is in start state set
        if (newState.some(set => set.transitAlphabet === inputString[i])) {
          // set result state
          result = newState.find(set => set.transitAlphabet === inputString[i])
          // change start state
          newState.forEach(set => set.startState = false)
        }
        // set new start state
        newState = findState(result.transitResult)
        i++;
      }
      // reset state back to original start state
      newState = findState(fa.faStartState);
      setIsAccepted(fa.faFinalStates.includes(result.transitResult))
    }
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

  return (<MainContext.Provider value={{
    isAccepted,
    setIsAccepted,
    inputString,
    setInputString,
    handleString,
    validateFA,
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
    handleStartState, // faAlphabets,
    // setFaAlphabets,
    generateAlphabets, // faStates,
    // setFaStates,
    generateStates,
    submitForm,
  }}>
    {children}
  </MainContext.Provider>)
}
