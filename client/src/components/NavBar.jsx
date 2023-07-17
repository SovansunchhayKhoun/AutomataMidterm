import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UtilContext } from '../context/UtilContext';

export const NavBar = () => {
  const {navBarSelect, setNavBarSelect} = useContext(UtilContext);
  const navigate = useNavigate();

  const navLinks = [
    {title: "Construct FA", to: "/"},
    {title: "Classify FA", to: "/"},
    {title: "Convert from NFA to DFA", to: "/"},
    {title: "Minimize DFA", to: "/minimized"},
  ]
  
  return (
    <nav
        className={`min-[1880px]:px-96
        lg:px-16
        md:px-6 px-6 bg-blue-500 p-4 flex items-center justify-start list-none gap-x-5 text-white`}
      >
      {navLinks.map((li, key) => (
        <li onClick={() => {
          setNavBarSelect(li.title);
          navigate(li.to)
        }} key={key} className={`${li.title === navBarSelect && 'bg-white p-2 rounded-md text-black'}`}>
          {li.title}
        </li>
      ))}
      </nav>
  )
}
