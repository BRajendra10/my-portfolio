import React from 'react'
import { NavLink } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

function BackBtn() {
  return (
    <NavLink className="flex gap-2 items-center justify-center text-base" to={"/"}><GoArrowLeft />go back</NavLink>
  )
}

export default BackBtn