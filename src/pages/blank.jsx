import React from 'react'
import { Link } from "react-router-dom";
function blank() {
  return (
    <div> <li className="nav-item">
    <Link to="/token" className="nav-link">
      Token
    </Link>
  </li>
  <li className="nav-item">
    <Link to="/tiger" className="nav-link">
      Tiger
    </Link>
  </li></div>
  )
}

export default blank