import React, { useEffect } from 'react'
import { MdOutlineBloodtype } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';
import {Link, useLocation} from 'react-router-dom'

const Header = () => {

    const {user} = useSelector(state=> state.auth);
    const location = useLocation();
    //logout handler
    const handleLogout=()=>{
        localStorage.clear();
        alert('Logout Successful !')
        window.location.reload();
    }
    return (
    <>
        <nav className='navbar'>
            <div className="container-fluid">
                <div className="navbar-brand h1"><MdOutlineBloodtype color='red'/>RED <span className='gold'>GOLD</span></div>
                <ul className='navbar-nav flex-row'>
                    <li className="nav-item mx-3">
                        <p className='nav-link'><FaUserAlt/> Welcome <span className='gold'> {user?.name || user?.hospitalName || user?.organisationName} &nbsp;</span>
                        <span className="badge bg-secondary">{user?.role}</span>
                        </p>
                    </li>
                    {
                        (location.pathname === '/' || location.pathname === '/donar' || location.pathname === '/hospital') ? (
                            <li className='nav-item mx-3'>
                                <Link to='/analytics' className='nav-link'>
                                    Analytics
                                </Link>
                            </li>
                        ):(
                            <li className='nav-item mx-3'>
                                <Link to='/' className='nav-link'>
                                    Home
                                </Link>
                            </li>
                        )
                    }
                    <li className="nav-item mx-3">
                        <button className='btn btn-danger' onClick={handleLogout}> <HiOutlineLogout color='white' /> Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Header