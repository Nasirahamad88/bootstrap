import React from 'react';
import './Nav1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCreditCard, faGlobe,  faLocationDot, faPaste, faTags, faTruckFast,  } from '@fortawesome/free-solid-svg-icons';

function Nav1() {
  return (
    <div className=''>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid  ">
          <a className="navbar-brand custom-text-color "
            href="#">

            
                                 <div>
  <FontAwesomeIcon icon={faLocationDot} className='px-1'/>
      Delivery to 
                                                    </div>
          </a>
          <button
            className="navbar-toggler btn btn-warning"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {/* <li className="nav-item dropdown">
                <a className="nav-link active" aria-current="page" href="#">
                  Bangladesh
                </a>
              </li> */}
              
              <FontAwesomeIcon icon={faCreditCard} className='credit-Card'/>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle fast-track"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Bangladesh
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
              <div className='fast-track px-4'>|</div>
              <div className='fast-track'>
                    <FontAwesomeIcon icon={faTruckFast} /></div>
                    
              <li className="nav-item dropdown">
                
                <a
                  className="nav-link dropdown-toggle fast-track"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Track order
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
            </ul>
          </div>
          
          <div className='custom-width '>

          <p className="text-center ps-10px"><FontAwesomeIcon icon={faPaste} className='px-2' />Free delivery from <span className='font-bold'>50 SAR</span> and free returns within <span className='font-bold'>60 </span>days</p>
          

        </div>
        
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              
              
            <FontAwesomeIcon icon={faTags} style={{color: "#ffff",}} className='credit-Card'/>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle fast-track"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Top deals
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
              
              <div className='fast-track'>
                    <FontAwesomeIcon icon={faTruckFast} /></div>
                    
              <li className="nav-item dropdown">
                
                <a
                  className="nav-link dropdown-toggle fast-track"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  BDT
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
              <div className='fast-track px-4 pb-2'>|</div>
          
              <li className="nav-item dropdown">
                
                <a
                  className="nav-link dropdown-toggle fast-track "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ><FontAwesomeIcon icon={faGlobe} beatFade className='pt-2 px-2 p fast-track' />
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
              </li>
            </ul>
          </div>
          <div className='dark-cir'>
          <FontAwesomeIcon icon={faCircle} className='fast-track px-2 ' />
          <div className="fast-track">Dark</div>
          </div>
         



        

       
        </div>
      </nav>
    </div>
  );
}

export default Nav1;
