import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export const MinimizedDfa = () => {
  const [isSelected,setIsSelected] = useOutletContext();
  useEffect(() => {
    setIsSelected("4");
  }, [setIsSelected]);
  return (
    <div>
      DFA Minimization
    </div>
  )
};
