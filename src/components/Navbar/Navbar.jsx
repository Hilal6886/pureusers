import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation, Link } from 'react-router-dom';
import './navbar.scss'
import logo from './ddr.png'
import { AiFillCloseCircle } from 'react-icons/ai'
import { MdOutlineSubject } from 'react-icons/md'
import userAvatar from '../../assets/images/avatar.png'

import { signOut } from "firebase/auth"
import { auth } from "../../firebase";


import 'react-toastify/dist/ReactToastify.css';

const Navbar = ({ user }) => {
    const userId = user?.uid
    console.log('userId', userId)
    console.log('name', user?.displayName)
    const [selectedOption, setSelectedOption] = useState('/admin');
    const navigate = useNavigate();

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        navigate(event.target.value);
    }

    const userData = localStorage.getItem("USER")
    let currentUser = null
    let isAdmin = false
    if (userData) {
        currentUser = JSON.parse(userData)
        isAdmin = currentUser.isAdmin;
    }
    const profileActionRef = useRef(null)
    const toggleProfileAction = () => {
        console.log("profileActionRefprofileActionRefprofileActionRef", profileActionRef)
        profileActionRef.current.classList.toggle('show_profileActions')
    }
    const logout = () => {
        console.log("LOGIINNNGput")
        signOut(auth).then(() => {
            console.log("logout sucessfully")
            localStorage.removeItem("USER")
            window.location.reload()//location.reload()
            //    toast.success('logged out') 
        }).catch(err => {
            console.log("errror", err)
            // toast.error(err.message)

        })
    }
    const [showNav, setShowNav] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setShowNav(false);
    }, [location.pathname]);

    const toggleNav = () => {
        setShowNav(!showNav);
    }




    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDev">
                    <a href="/home" className="logo">
                        <div className="flex">
                            <img src={logo} alt='logo' />
                        </div>

                    </a>

                </div>

                <div className={showNav ? 'navBar activeNavbar' : 'navBar'}>
                    <ul className="navLists flex">

                        <div className="toggleNavbar">

                            <img src={currentUser ? currentUser.photoURL : userAvatar}
                                alt='user profile' ref={profileActionRef} onClick={toggleProfileAction} />
                        </div>



                        <li className="NavItem">
                         

                            <Link to="/home" className="navLink">HOME</Link>
                        </li>

                        <li className="NavItem">
                          
                            <Link to="/categories" className="navLink">CATEGORIES</Link>
                        </li>


                        <li className="NavItem">
                          
                            <Link to="/CBlog" className="navLink">BLOGS</Link>

                         

                        </li>

                        <li className="NavItem">
                          
                       
                            <Link to="/contact-us" className="navLink">CONTACT</Link>
                            
                        </li>


                        {isAdmin &&

                            <li className='NavItem'>
                           
                                <select className="navLink" style={{
                                    marginRight: '-2rem',


                                    border: 'none', outline: 'none', WebkitAppearance: 'none', MozAppearance: 'none',
                                    appearance: 'none', backgroundColor: 'transparent', background: '#2c3e50',
                                    fontSize: '1rem', color: ' white', fontWeight: '500'
                                }} value={selectedOption} onChange={handleOptionChange}>

                                    <option value="/" >ADMIN</option>
                                    <option value="/create">Blog</option>
                                    <option value="/tou">Categories</option>
                                    <option value="/count">Featured</option>


                                </select>
                            </li>
                        }
                        <div>
                            {
                                currentUser ?
                                    (<button className='btnq' onClick={logout}>Logout</button>
                                    ) : (

                                        <div>

                                            <button className="btnq ">
                                                <a href="/login">Login</a>
                                            </button>


                                        </div>

                                    )}
                        </div>

                    </ul>




                </div>

                {/* <div onClick={ShowNav} className="toggleNavbar">

                 <img src={userAvatar} alt='user profile'  ref={profileActionRef}  onClick={toggleProfileAction}/>
                        </div>*/}

                <div onClick={toggleNav} className="closeNavbar">
                    {showNav ? <AiFillCloseCircle className="icone" /> : <MdOutlineSubject className="icone" />}
                </div>

            </header>

        </section>
    )
}
export default Navbar