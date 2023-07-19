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
          {faStates?.map((fs, key) => {
            return (
              <Table.HeadCell key={key}>
                {fs.state}
              </Table.HeadCell>              
            )
          })}
        </Table.Head>
        <Table.Body className="divide-y">
          {faStates?.map((fs, key) => {
          return (
            <Table.Row key={key} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {fs.state}
              </Table.Cell>
              {faStates?.map((fa, key) => {
                return (
                  <Table.Cell key={key} className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <select onChange={handleTransition} name="" id="">
                      {faAlphabets?.map((fa, key) => {
                        return (
                          <option value={fa.state} key={key}>{fa.alphabet}</option>
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
