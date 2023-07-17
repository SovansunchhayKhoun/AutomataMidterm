import { useEffect, useContext } from "react";
import { useOutletContext } from "react-router-dom";
import { MainContext } from "../context/MainContext";

export const MinimizedDfa = () => {
  // const [isSelected,setIsSelected] = useOutletContext();
  // useEffect(() => {
  //   setIsSelected("4");
  // }, [setIsSelected]);
  
  return (
    <div>
      DFA Minimization
    </div>
  )
};
