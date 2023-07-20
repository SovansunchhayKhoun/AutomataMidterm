import React, { useContext } from 'react'
import { MainContext } from '../../context/MainContext'
import { Table } from 'flowbite-react';

export const TransitionTable = () => {
  const { fa, handleTransition } = useContext(MainContext);
  const { faStates, faAlphabets } = fa
  return (
    <>
      <label htmlFor="">Transition Table</label>
      <Table>
        <Table.Head>
          <Table.HeadCell>
            
          </Table.HeadCell>
          {faAlphabets?.map((fa, key) => {
            return (
              <Table.HeadCell key={key}>
                {fa.alphabet}
              </Table.HeadCell>              
            )
          })}
        </Table.Head>
        <Table.Body className="divide-y">
          {faStates?.filter(fs => fs.state !== 'Trap (Optional)').map((fs, stateKey) => {
          return (
            <Table.Row key={stateKey} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {fs.state}
              </Table.Cell>
              {faAlphabets?.map((fa, alphabetKey) => {
                return (
                  <Table.Cell key={alphabetKey} className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <select onChange={(event) => {
                          handleTransition(event, 
                            {row: stateKey, transitState: fs.state}, 
                            {col:alphabetKey, transitAlphabet: fa.alphabet}
                          )
                        }
                      } name="" id="">
                      {faStates?.map((fs, key) => {
                        return (
                          <option value={fs.state} key={key}>{fs.state}</option>
                        )
                      })}
                    </select>
                  </Table.Cell> 
                )
              })}
            </Table.Row>
          )
          })}
        </Table.Body>
      </Table>
    </>
  )
}
