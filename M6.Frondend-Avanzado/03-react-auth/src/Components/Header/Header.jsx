import React from 'react'
import './header.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const linkIsActive = (isActive) =>
    isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'

  return (
    <nav className='header'>
      <NavLink className='header__logo' to='/'>Logo</NavLink>
      <ul className='header__nav-list'>
        <li className='header__nav-item'>
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/'>Home</NavLink>
        </li>
        <li className='header__nav-item'>
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/dashboard'>Dashboard</NavLink>
        </li>
        <li className='header__nav-item'>
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/secret'>Secret</NavLink>
        </li>
        <li className='header__nav-item'>
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/login'>Login</NavLink>
        </li>
        <li className='header__nav-item'>
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/signup'>Signup</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
