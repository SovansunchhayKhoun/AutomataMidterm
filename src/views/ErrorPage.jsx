import React from 'react'
import {Link, redirect, useNavigate, useNavigation} from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div>
      <p>An error has occurred</p>
      <a href="/">Back home</a>
    </div>
  )
}
