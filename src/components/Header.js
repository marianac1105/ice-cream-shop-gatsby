import React, {useState} from "react"
import HeaderStyle from "./header.module.css"
import {GoThreeBars, GoX} from "react-icons/go"
import {Link} from "gatsby"
import Logo from "../images/logo.png"

export default function Header() {
const [isOpen, setOpen] = useState(false)

function clickHandler () {
    setOpen(!isOpen)
    
}

  return <header className={isOpen?HeaderStyle.open: null}>
    <div className= "container">
      <nav className={HeaderStyle.nav}>
        <button onClick={clickHandler} className={HeaderStyle.menuToggle} >
          <GoThreeBars className={HeaderStyle.faBars}/>
          <GoX className={HeaderStyle.faTimes}/>
        </button>
        <Link className={HeaderStyle.logo} to="/">
        
          <img src={Logo} alt="The Ice Cream Shop" />
          </Link>
        
        <ul className={HeaderStyle.navList}>
          <li className={HeaderStyle.navItem}>
          <Link className={HeaderStyle.navLink} to="/">
              Home
              </Link>
          </li>
          <li className={HeaderStyle.navItem}>
          <Link className={HeaderStyle.navLink} to="/">
              About
              </Link>
          </li>
          <li className={HeaderStyle.navItem}>
          <Link className={HeaderStyle.navLink} to="/">
              Menu
              </Link>
          </li>
          <li className={HeaderStyle.navItem}>
          <Link className={HeaderStyle.navLink} to="/">
              Contact
              </Link>
          </li>
        </ul>
      </nav>
    
  </div>
  </header>
}
