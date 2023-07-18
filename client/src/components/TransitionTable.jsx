import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'
import { Table } from 'flowbite-react';

export const TransitionTable = () => {
  const { faStates, faAlphabets } = useContext(MainContext);
  return (
    <div>
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
          {faStates?.map((fs, key) => {
          return (
            <Table.Row key={key} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {fs.state}
              </Table.Cell>
              {faAlphabets?.map((fa, key) => {
                return (
                  <Table.Cell key={key} className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <select name="" id="">
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
    </div>
  )
}
