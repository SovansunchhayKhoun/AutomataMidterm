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
  const [epsilonCheck, setEpsilonCheck] = useState(false);
  const [nfa, setNfa] = useState(false);

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
        // transitResult: ['q0'],
        transitResult: [],
        startState: true,
        finalState: true,
      }
    })),
  });
  const [inputString, setInputString] = useState('');
  const [trapCheck, setTrapCheck] = useState(false);

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
        // transitResult: ['q0'],
        transitResult: [],
        startState: fa.faStartState === `q${rowIndex}`,
        finalState: fa.faFinalStates.includes(`q${rowIndex}`)
      }
    }))

    setFa({...fa})
  }

  const removeTraps = () => {
    const {transitionSets} = fa;
    transitionSets.forEach((ts) => {
      ts.forEach((set) => {
        // set.transitResult = ['q0'];
        set.transitResult = [];
      })
    })
    setFa({...fa})
  }

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
        fa.transitionSets = Array.from({length: fa.faStates.length}, (_, rowIndex) => Array.from({length: cols}, (_, colIndex) => {
            return {
              transitState: rowIndex !== fa.faStates.length - 1 ? `q${rowIndex}` : 'Trap',
              transitAlphabet: `q${colIndex}`,
              // transitResult: [`q0`],
              transitResult: [],
              startState: fa.faStartState === `q${rowIndex}`,
              finalState: fa.faFinalStates.includes(`q${rowIndex}`)
            }
          }
        ))
        setFa({...fa});
        setTrapCheck(true);
      } else {
        // remove trap
        fa.faStates.splice(fa.faStates.indexOf('Trap'), 1);
        setFa({...fa});
        removeTraps();
        setTrapCheck(false);
        clearTransition()
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
            // transitResult: [`q0`],
            transitResult: [],
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

  const adjustEpsilon = () => {
    // remove epsilon
    setError({...error, nfaError: ''})
    if (epsilonCheck) {
      console.log('remove')
      console.log(fa.faStartState)
      const index = fa.faAlphabets.indexOf('$');
      fa.faAlphabets.splice(index, 1);
      setEpsilonCheck(false);

      setFa({...fa})
      classifyFA()
      // setNfa(false);
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
          // transitResult: [`q0`],
          transitResult: [],
          startState: fa.faStartState === `q${rowIndex}`,
          finalState: fa.faFinalStates.includes(`q${rowIndex}`)
        }
      }))

      adjustTrap(true);
      // setNfa(true);
      classifyFA()
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
            // transitResult: [`q0`],
            transitResult: [],
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

  const handleStartState = (value) => {
    // const {value} = event.target;
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

  const classifyFA = () => {
    const {transitionSets, faAlphabets} = fa;
    let flag = false;
    let sum = 0;
    if (faAlphabets.includes('$')) { // check if alphabet set includes an epsilon
      setNfa(true)
      flag = true;
    } else {
      transitionSets.forEach(tr => tr.forEach(set => {
        sum += set.transitResult.length;
        if(sum !== fa.faStates.length * fa.faAlphabets.length) {
          setNfa(true)
          flag = true
        } else {
          setNfa(false)
          flag = false
        }
      }))
    }
    if (!flag) {
      setNfa(false);
    }
  }

  const handleTransition = (result, state, alphabet, event) => {
    const {checked} = event.target;
    const {transitionSets} = fa;
    const {row, transitState} = state;
    const {col, transitAlphabet} = alphabet;

    const currentTr = transitionSets[row][col];
    // console.log(currentTr.transitResult)
    if (checked && !currentTr.transitResult.includes(result)) {
      currentTr.transitResult.push(result)
      // classify FA
      classifyFA()
    } else {
      currentTr.transitResult.splice(currentTr.transitResult.indexOf(result), 1);
      // classify FA
      classifyFA()
    }
    setFa({...fa})
    // console.log(transitionSets[row][col].transitResult)
  }


  const handleString = (event) => {
    setError({...error, stringError: ''})
    setIsAccepted(false)
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

  const findEpsilonState = (result, value) => {
    console.log(`Value ${value}`)
    const {transitionSets} = fa;
    // let result = [];
    transitionSets.forEach(tr => {
      tr.filter(set => set.transitState === value).forEach(set => {
        if (set.transitResult.length > 0 && set.transitAlphabet === '$') {
          console.log('Epsilon State')
          console.log(set)
          result.push(set.transitResult[0])
        }
      })
    })
  }

  let newStates = [getStartState()];
  let iter = 1;
  let containEps = false;
  const validateNFA = (string, resultState) => {
    let tmpString = string;
    let result = resultState;
    console.log(`----------------------------------------------`)
    console.log(`Iteration ${iter} ----------------------------`)
    console.log(`computing string ${tmpString}`)
    // console.log('Start State')
    // console.log(newStates)
    setError({...error, stringError: ''})
    if (fa.faFinalStates.length <= 0) {
      setError({...error, stringError: 'Missing Final States'});
      return;
    }
    if (tmpString.length === 0 && !containEps) {
      console.log('End')
      console.log(result)
      newStates = [findState(fa.faStartState)]
      result.forEach(res => {
        if (fa.faFinalStates.includes(res)) {
          setIsAccepted(fa.faFinalStates.includes(res))
        }
      })
      result = [];
      console.log(`---------------------------------------------- Total iteration: ${iter}`)
      return;
    }

    if (!checkString()) {
      setError({...error, stringError: 'Some input alphabets are not included in your alphabet set'})
      setIsAccepted(false);
    } else {
      containEps = false;
      console.log(`Computing character: ${tmpString[0]}`)
      console.log('Start State: ')
      console.log(newStates)
      iter++; // keep track of iteration
      // set resulting states
      result = []

      // console.log('Check current row EPS');
      // newStates.forEach(ns => {
      //   ns.forEach(ns => {
      //     if(ns.transitAlphabet === '$') {
      //       console.log(ns);
      //       ns.transitResult.forEach(res => {
      //         console.log(`Result of epsilon transition: ${res}`);
      //         result.push(res)
      //       })
      //     }
      //   })
      // })

      // newStates.forEach(state => state.filter(st => st.transitAlphabet === tmpString[0])[0].transitResult.forEach(res => {
      //   if (!result.includes(res)) {
      //     result.push(res)
      //     console.log(`Result of first iteration: ${res}`)
      //   }
      // }))

      // newStates.forEach(state => state.forEach(st => {
      //   if(st.transitAlphabet === tmpString[0] || st.transitAlphabet === '$') {
      //     console.log(st)
      //     st.transitResult.forEach(res => {
      //       tmpArr.push(res)
      //     })
      //   }
      // }))
      // console.log('Tmp Array: ')
      // console.log(tmpArr)

      // the start state
      newStates.forEach(state => state.forEach(st => {
        if(st.transitAlphabet === tmpString[0]) {
          st.transitResult.forEach(res => {
            result.push(res)
          })
        }
        if(st.transitAlphabet === '$') {
          console.log(`State ${st.transitState} has epsilon`)
          containEps = true;
          st.transitResult.forEach(res => {
            result.push(res)
          })
        }
      }))

      console.log(`Contain EPS?: ${containEps}`)

      console.log('After first Iteration')
      console.log(result)

      // result.forEach(res => {
      //   newStates.push(findState(res));
      // })

      // // find if state has epsilon
      // console.log('Find epsilon with these states')
      // console.log(newStates)

      // newStates.every(st => {
      //   if (st.some(set => set.transitAlphabet === '$' && set.transitResult.length > 0)) {
      //     containEps = true;
      //     st.filter(set => set.transitAlphabet === '$' && set.transitResult.length > 0).every(set => {
      //       console.log(set)
      //       set.transitResult.forEach(res => {
      //         console.log(res)
      //         if (!result.includes(res))
      //           result.push(res) // push epsilon transition
      //       })
      //       return true;
      //     })
      //   }
      //   return true;
      // })

      // slice 1 char at head of string
      tmpString = tmpString.slice(1);
      console.log(`Slice: ${tmpString}`)
      console.log(`Length: ${tmpString.length}`)

      if (containEps) {
        console.log('First Result (EPS): ')
        console.log(result);
        newStates = []
        // push result states as new start state
        result.forEach(res => {
          newStates.push(findState(res));
        })
        console.log('New Start State: ')
        console.log(newStates)
        validateNFA(tmpString, newStates)
      }

      console.log('No EPS')
      newStates = []

      // push resulting state as starting state
      result.forEach(res => {
        newStates.push(findState(res))
      })

      console.log('Last Result: ')
      console.log(result)
      validateNFA(tmpString, result)
    }
  }

  const validateDFA = () => {
    setError({...error, stringError: ''})
    if (fa.faFinalStates.length <= 0) {
      setError({...error, stringError: 'Missing Final States'});
      return;
    }

    if (!checkString()) {
      setError({...error, stringError: 'Some input alphabets are not included in your alphabet set'})
      setIsAccepted(false);
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
        newState = findState(result.transitResult[0])
        i++;
      }
      // reset state back to original start state
      newState = findState(fa.faStartState);
      setIsAccepted(fa.faFinalStates.includes(result.transitResult[0]))
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
    validateNFA,
    handleTransition,
    isAccepted,
    setIsAccepted,
    inputString,
    setInputString,
    handleString,
    validateDFA,
    epsilonCheck,
    setEpsilonCheck,
    trapCheck,
    setTrapCheck,
    nfa,
    setNfa,
    adjustTrap,
    setRows,
    setCols,
    // handleDfaTransition,
    adjustEpsilon,
    error,
    setError,
    handleFinalState,
    fa,
    setFa,
    handleStartState,
    generateAlphabets,
    generateStates,
    submitForm,
  }}>
    {children}
  </MainContext.Provider>)
}
