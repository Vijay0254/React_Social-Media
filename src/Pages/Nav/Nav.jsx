import React from 'react'
import "./Nav.css"
import { Link } from "react-router-dom"

const Nav = ({search,setsearch}) => {
  return (
    <nav className='nav'>
        <form action="" className='nav_searchForm' onClick={(event) =>event.preventDefault()}>
            <input type="text" placeholder='Search Posts' value={search} onChange={(event) =>setsearch(event.target.value)} />
        </form>

        <ul className='nav_li'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="post">Post</Link></li>
            <li><Link to="about">About</Link></li>
        </ul>
    </nav>
  )
}

export default Nav