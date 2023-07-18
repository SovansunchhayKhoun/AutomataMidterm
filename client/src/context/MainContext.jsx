import React, { createContext, useState, useRef } from 'react'

export const MainContext = createContext();
export const MainProvider = ({ children }) => {
  const [fa, setFa] = useState({
    faStates: [],
    faAlphabets: [],
    faStartStates: [],
    faFinalStates: []
  });
  const [faStates, setFaStates] = useState([]);
  const [faAlphabets, setFaAlphabets] = useState([]);

  const clearFaState = () => {
    setFaStates(faStates.splice(0, faStates.length));
  }

  const generateStates = (event) => {
    clearFaState();   
    
    // if 0 clear states
    if(Number(event.target.value) <= 0) {
      setFaStates([]);
      setFa({...fa, faStates});
    }

    if (Number(event.target.value) > 0 && Number(event.target.value) < 15) {
      for (let i = 0; i < Number(event.target.value); i++) {
        faStates.push({
          index: i,
          state: `q${i}`
        })

        setFaStates(faStates)
        setFa({ ...fa, faStates })
      }
    }
  }

  const adjustEpsilon = (event) => {
    // remove epsilon
    if(!event.target.checked) {
      const index = faAlphabets.indexOf('$');
      faAlphabets.splice(index, 1);
      fa.faAlphabets = 0;
      setFaAlphabets(faAlphabets)
      setFa({...fa, faAlphabets})
    }
    // add epsilon
    if(event.target.checked) {
      faAlphabets.push({
        index: faAlphabets.length,
        alphabet: '$',
      })
      setFaAlphabets(faAlphabets)
      setFa({...fa, faAlphabets})
    }
  }

  const clearAlphabets = (event) => {
    // remove epsilon
    if(!event.target.checked) {
      setFaAlphabets(faAlphabets.splice(0, faAlphabets.length));
      adjustEpsilon(event) 
    }
  }

  const generateAlphabets = (event) => {
    clearAlphabets(event);
 
    // removeEpsilon(event);
    adjustEpsilon(event)

    // if 0 clear alphabets
    if(Number(event.target.value) <= 0) {
      setFaAlphabets([]); 
      setFa({...fa, faAlphabets});
    }

    if (Number(event.target.value)>0 && Number(event.target.value)<=26) {
      for (let i = 0; i < event.target.value; i++) {
        faAlphabets.push({
          index: i,
          alphabet: String.fromCharCode(i + 65), // convert num to char
        })
        setFaAlphabets(faAlphabets)
        setFa({ ...fa, faAlphabets });
      }
    }
  }

  const handleStartState = (event) => {
    const { value, checked } = event.target;   
    if (!checked) {
      // remove one start state
      const index = fa.faStartStates.indexOf(value);
      fa.faStartStates.splice(index, 1);
    } else {
      if(!fa.faStartStates.includes(value)) {
        fa.faStartStates.push(value)
      }
    }
    setFa({...fa})
  }

  const handleFinalState = (event) => {
    const { value, checked } = event.target;
    if (!checked) {
      // remove one start state
      const index = fa.faFinalStates.indexOf(value);
      fa.faFinalStates.splice(index, 1);
    } else {
      if(!fa.faFinalStates.includes(value)) {
        fa.faFinalStates.push(value)
      }
    }
    setFa({...fa})
  }

  const submitForm = () => {    
    console.log(fa);
  }

  return (
    <MainContext.Provider value={{
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
