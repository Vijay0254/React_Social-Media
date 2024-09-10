import React from 'react'
import "./Missing.css"
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <div className='missing'>
      <h2>Page Not Found</h2>
      <Link to="/"><p>Visit our home page</p></Link>
    </div>
  )
}

export default Missing