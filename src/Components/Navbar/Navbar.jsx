import React from 'react';
import { useState } from 'react';
import {NavLink} from 'react-router-dom';

export default function Navbar(props) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (<>
  <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className='navbar-brand' to='home' >N<span>oo</span>VA</NavLink>
          <button className="navbar-toggler" type='button' data-bs-toggle='collapse' data-bs-target='#navbarID' aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
            <span className="fa-solid fa-bars-staggered text-muted"></span>
          </button>
          <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
    
              
                {props.userData?<><li className="nav-item">
                    <NavLink className="nav-link" to='home'>Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to='tv'>TV Shows</NavLink>
                  </li>
                  
                  <li className="nav-item">
                    <NavLink className="nav-link" to='movies'>Movies</NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to='people'>People</NavLink>
                  </li></>:''}
                            
            </ul>

            <ul className="navbar-nav">
            {isNavCollapsed?<>
              <li className="nav-item mr-3 d-flex align-items-center justify-content-center">
                <i className="fab mx-2 fa-instagram"></i>
                <i className="fa-brands fa-facebook mx-2"></i>
                <i className="fab mx-2 fa-twitter"></i>
                <i className="fab mx-2 fa-spotify"></i>
                
              </li></>:''}
              {props.userData?<>
              <li className="nav-item">
                <span className="nav-link text-light" onClick={props.logOut}>Logout</span>
              </li>
              </>
              :<>  
              <li className="nav-item">
                <NavLink className="nav-link" to='register'>Register</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='login'>Login</NavLink>
              </li>
              
              </>}
              
                
            </ul>
            
          </div>
        </div>
          
        </nav>
  </>
  )
}
