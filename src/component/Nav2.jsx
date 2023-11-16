import React from 'react'
import './Nav2.css'
import { faBars, faBell, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function nav2() {
  return (
    <div className='navbar navbar-expand-lg bg-body-tertiary'>
      <div>
      <FontAwesomeIcon icon={faBars} />
      </div>
      <div className='px-3'><h2>Shofy</h2></div>

        <form className="d-flex item-center  custom-width" role="search">
        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              
            <FontAwesomeIcon icon={faBell} className='icon' />
            
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle fast"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sell
                </a>
                
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              
              <div className='fast px-4 pt-2'>|</div>
              <FontAwesomeIcon icon={faUser} className='icon'/>
                    
              <li className="nav-item dropdown">
                
                <a
                  className="nav-link dropdown-toggle fast"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              
          
              {/* <li className="nav-item dropdown">
                
                <a
                  className="nav-link dropdown-toggle fast-track "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                EN
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
    </div>
  )
}

export default nav2