import React, {useContext} from 'react'
import {MainContext} from '../../context/MainContext'
import {Table} from 'flowbite-react';

export const TransitionTable = () => {
  const {fa, handleTransition} = useContext(MainContext);
  const {faStates, faAlphabets, faStartState, faFinalStates} = fa
  if (faStates.length > 0 || faAlphabets.length > 0) {
    return (
      <div className={"p-4 flex w-full border-2 rounded-tl-md rounded-tr-md border-blue-500 flex-col gap-2"}>
        <label htmlFor="">Transition Table</label>
        <Table>
          <Table.Head>
            <Table.HeadCell>
              Start and <br/> Final States
            </Table.HeadCell>
            <Table.HeadCell>
              States
            </Table.HeadCell>
            {faAlphabets?.map((fa, key) => {
              return (
                <Table.HeadCell key={key}>
                  {fa}
                </Table.HeadCell>
              )
            })}
          </Table.Head>
          <Table.Body className="divide-y">
            {faStates?.filter(fs => fs !== 'Trap').map((fs, stateKey) => {
              return (
                <Table.Row key={stateKey} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>
                    {fs === faStartState && <span className='whitespace-nowrap'>
                      Start State: {faStartState} <br/>
                    </span>}
                    {faFinalStates.length > 0 && faFinalStates.filter((ffs) => ffs === fs).map((ffs, key) => <div
                      key={key}>Final State: {ffs}</div>)}
                  </Table.Cell>

                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {fs}
                  </Table.Cell>
                  {faAlphabets?.map((fa, alphabetKey) => {
                    return (
                      <Table.Cell key={alphabetKey}
                                  className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        <select onChange={(event) => {
                          handleTransition(event,
                            {row: stateKey, transitState: fs},
                            {col: alphabetKey, transitAlphabet: fa}
                          )
                        }
                        } name="" id="">
                          {faStates?.map((fs, key) => {
                            return (
                              <option value={fs} key={key}>{fs}</option>
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
}
