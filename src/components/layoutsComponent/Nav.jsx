import React, { useState } from 'react'
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri/index'
import './Nav.css'

const Nav = () => {
  const [showNav, setShowNav] = useState(false)
  const [bgColor, setBgColor] = useState(false)

  return (
    <div className='nav'>
      <nav className={showNav ? 'active' : 'none'}>
        <ul>
          <li>
            <a href='/about'>about us</a>
          </li>
          <li>
            <a href='/service'>our services</a>
          </li>
          <li>
            <a href='/blogs'>our blogs</a>
          </li>
          <li>
            <a href='/contact'>contact us</a>
          </li>
        </ul>
      </nav>
      {showNav ? (
        <RiCloseFill onClick={() => setShowNav(false)} />
      ) : (
        <RiMenu4Fill onClick={() => setShowNav(true)} />
      )}
    </div>
  )
}

export default Nav
