import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const Layout = () => {
  const [isSelected, setIsSelected] = useState("1");
  const navigate = useNavigate();
  return (
    <div>
      <nav
        className={`bg-blue-500 p-4 flex items-center justify-start list-none gap-x-5 text-white`}
      >
        <li
          onClick={() => {
            setIsSelected("1");
            navigate("/");
          }}
          className={`${
            isSelected === "1" && "bg-white p-2 rounded-md text-black"
          }`}
        >
          Construct DFA
        </li>
        <li
          onClick={() => {
            setIsSelected("2");
            navigate("/");
          }}
          className={`${
            isSelected === "2" && "bg-white p-2 rounded-md text-black"
          }`}
        >
          Construct NFA
        </li>
        <li
          onClick={() => {
            setIsSelected("3");
            navigate("/");
          }}
          className={`${
            isSelected === "3" && "bg-white p-2 rounded-md text-black"
          }`}
        >
          Convert from NFA to DFA
        </li>
        <li
          onClick={() => {
            setIsSelected("4");
            navigate("/minimized");
          }}
          className={`${isSelected === "4" && "bg-white p-2 rounded-md text-black"}`}
        >
          Minimize DFA
        </li>
      </nav>
      <Outlet context={[isSelected, setIsSelected]} />
    </div>
  );
};
