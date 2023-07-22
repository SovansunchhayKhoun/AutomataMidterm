import React, {useContext} from "react";
import {MainContext} from "../../context/MainContext.jsx";
export const TransitionDiagram = () => {
  const {fa} = useContext(MainContext);
  const {transitionSets} = fa;
    return (
      <div className={'h-full p-4 flex flex-col justify-center border-blue-500 border-2 rounded-tl-md rounded-tr-md'}>
        {transitionSets?.map(set => {
          return (
            set.map((s, key) => {
              return (
                <div key={key}>
                  {s.transitState}&nbsp;transition&nbsp;
                  {s.transitAlphabet}&nbsp;
                  =&nbsp;{s.transitResult}
                </div>
              )
            })
          )
        })}
      </div>
    );
};