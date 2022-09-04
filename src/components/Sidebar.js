import React, { useState } from 'react'
import './Sidebar.css'
import logo from '../assets/logo/webscript.png'
import user from '../assets/user.jpg'

const Sidebar = () => {

    const [inactive, setInactive] = useState(false);
    return (

        <div className={`side-menu ${inactive ? "inactive" : ""}`}>
            <div className='top-section'>
                <div className='logo'>
                    <img src={logo} alt='' />
                </div>
                <div onClick={() => setInactive(!inactive)} className='toggle-menu-btn'>
                    {inactive ?  <i className="bi bi-arrow-right-square-fill"></i> : <i className="bi bi-arrow-left-square-fill"></i>}
                </div>
            </div>

            <div className='divider'></div>

            <div className='main-menu'>
                <ul>

                <li>
                        <a className='menu-item' href='/'>
                            <div className='menu-icon'>
                            <i className="bi bi-person-circle"></i>
                            </div>
                            <span>Profile </span> </a>
                    </li>

                    <li>
                        <a className='menu-item' href='/'>
                            <div className='menu-icon'>
                            <i className="bi bi-chat-quote-fill"></i>
                            </div>
                            <span>Discover</span> </a>
                    </li>

                    <li>
                        <a className='menu-item' href='/'>
                            <div className='menu-icon'>
                            <i className="bi bi-circle"></i>
                            </div>
                            <span>Smart Up</span> </a>
                    </li>

                    <li>
                        <a className='menu-item' href='/'>
                            <div className='menu-icon'>
                            <i className="bi bi-app"></i>
                            </div>
                            <span>App </span> </a>
                    </li>

                    <li>
                        <a className='menu-item' href='/'>
                            <div className='menu-icon'>
                            <i className="bi bi-display"></i>
                            </div>
                            <span>Tech </span> </a>
                    </li>

                    <li>
                        <a className='menu-item' href='/'>
                            <div className='menu-icon'>
                            <i className="bi bi-github"></i>
                            </div>
                            <span>Git Hub </span> </a>
                    </li>

                    <li>
                        <a className='menu-item' href='/'>
                            <div className='menu-icon'>
                            <i className="bi bi-google"></i>
                            </div>
                            <span>Google </span> </a>
                    </li>


                    {/*
                    <li>
                        <a className='menu-item' href='/'>
                            <div className='menu-icon'>
                            <i className="bi bi-person"></i>
                            </div>
                            <span>Personal </span> </a>

                            <ul className='sub-menu'>
                                <li>
                                    <a><span>In Progress</span></a>
                                </li>
                                <li>
                                    <a><span>Completed </span></a>
                                </li>
                                <li>
                                    <a><span>Read Later</span></a>
                                </li>
                            </ul>
                    </li> 
                    */}
                </ul>
            </div>



            <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user" />
        </div>
        <div className="user-info">
          <h5>Rizwan Khan</h5>
          <p>rizwankhan@gmail.com</p>
        </div>
      </div>


            

        </div>

    )
}


export default Sidebar;


