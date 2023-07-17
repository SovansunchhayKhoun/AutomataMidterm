import React, { useContext } from 'react'
import { UtilContext } from '../context/UtilContext'

export const ConstructFa = () => {
  const {apiData, apiDataIsLoading} = useContext(UtilContext);
  return (
    <main className='flex items-center justify-center w-full border-2'>
      <div className='grid grid-cols-[150px_2fr] gap-4 w-full'>
        <label htmlFor="state">State: </label>
        <input className="border-2 border-[#3B82F6] px-2 py-1 w-[50%]" type="text" id="state" placeholder='State... (i.e q0, q1, q2...)'/>

        <label htmlFor="alphabet">Alphabet: </label>
        <input className="border-2 border-[#3B82F6] px-2 py-1 w-[50%]" type="text" id="alphabet" placeholder='Alphabet... (i.e a, b, c, 0, 1...)'/>

        <label htmlFor="startState">Start State: </label>
        <input className="border-2 border-[#3B82F6] px-2 py-1 w-[50%]" type="text" id="startState" placeholder='Start state...'/>

        <label htmlFor="finalState">Final State: </label>
        <input className="border-2 border-[#3B82F6] px-2 py-1 w-[50%]" type="text" id="finalState" placeholder='Final State...'/>

        <label htmlFor="transition">Transition: </label>
        <input className="border-2 border-[#3B82F6] px-2 py-1 w-[50%]" type="text" id="transition" placeholder=''/>
      </div>
    </main>
  )
}
