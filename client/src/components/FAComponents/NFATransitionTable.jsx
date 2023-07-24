import {Table} from "flowbite-react";
import React, {useContext} from "react";
import {MainContext} from "../../context/MainContext.jsx";

export const NFATransitionTable = () => {
  const {fa} = useContext(MainContext);
  const {faStates, faAlphabets, faStartState, faFinalStates} = fa
  if (faStates.length > 0 || faAlphabets.length > 0) {
    return (
      <div className={"p-4 flex w-full border-2 rounded-tl-md rounded-tr-md border-blue-500 flex-col gap-2"}>
        <div className={'flex flex-col gap-1'}>
          <p className={'font-semibold'}>Transition Table (WIP)</p>
          <ul className={'text-xs text-gray-500'}>
            <li>* The Header is the resulting state</li>
            <li>* The check boxes are the alphabets for transition</li>
          </ul>
        </div>
        <Table>
          <Table.Head>
            <Table.HeadCell>
              Start and <br/> Final States
            </Table.HeadCell>
            <Table.HeadCell>
              States
            </Table.HeadCell>
            {faStates?.map((fs, key) => {
              return (
                <Table.HeadCell key={key}>
                  {fs} (RESULT)
                </Table.HeadCell>
              )
            })}

          </Table.Head>
          <Table.Body className="divide-y">
            {faStates?.filter(fs => fs !== 'Trap').map((fs, key) => {
              return (
                <Table.Row key={key} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>
                    {fs === faStartState && <span className='whitespace-nowrap'>
                      Start State: {faStartState} <br/>
                    </span>}
                    {faFinalStates.length > 0 && faFinalStates.filter((ffs) => ffs === fs)
                      .map((ffs, key) => {
                          return (
                            <div
                              key={key}>Final State: {ffs}</div>
                          )
                        }
                      )}
                  </Table.Cell>

                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {fs}
                  </Table.Cell>
                  {faStates?.map((fs, rowKey) => {
                    return (
                      <Table.Cell key={rowKey} className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {faAlphabets?.map((fa, key) => {
                          return (
                            <div key={key} className={'flex gap-1 items-center'}>
                              <input type="checkbox"/>
                              <label htmlFor="">{fa}</label>
                            </div>
                          )
                        })}
                      </Table.Cell>
                    )
                  })}
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      </div>
    );
  }
};