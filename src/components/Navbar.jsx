import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex flex-row justify-evenly w-full">
      <NavLink
      to="/">
        Home
      </NavLink>

      <NavLink 
      to="/pastes">
        Pastes
      </NavLink>
    </div>
  )
}

export default Navbar
