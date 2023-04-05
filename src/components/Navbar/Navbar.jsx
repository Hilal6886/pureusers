import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './navbar.scss'
import logo from './ddd.png'
import { AiFillCloseCircle } from 'react-icons/ai'
import { GoThreeBars } from 'react-icons/go'
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
                        <h5>PROFILE</h5>


                        <li className="NavItem">
                            <i class="ri-home-line"></i>
                            <a href="/home" className="navLink">HOME</a>
                        </li>
                        <li className="NavItem">
                        <i class="ri-roadster-line"></i>
                            <a href="/Tourss" className="navLink">TOURS</a>

                        </li>
                        <li className="NavItem">
                            <i class="ri-user-3-line"></i>
                            <a href="/about" className="navLink">ABOUT</a>
                        </li>


                        <li className="NavItem">
                            <i class="ri-file-text-line"></i>

                            <a href="/CBlog" className="navLink">BLOGS</a>

                        </li>

                        <li className="NavItem">
                            <i class="ri-hand-heart-line"></i>
                            <a href="/offers" className="navLink">   OFFERS</a>
                        </li>

                        <li className="NavItem">
                            <i class="ri-service-line"></i>
                            <a href="/services" className="navLink">SERVICES</a>
                        </li>


                      


                        <li className="NavItem">
                            <i class="ri-contacts-line"></i>
                            <a href="/contact-us" className="navLink">CONTACT</a>
                        </li>
                        {isAdmin &&

                            <li className='NavItem'>
                                <select style={{
                                    border: 'none', outline: 'none', WebkitAppearance: 'none', MozAppearance: 'none',
                                    appearance: 'none', padding: '0.5rem', backgroundColor: 'transparent',
                                    fontSize: '1rem', color: ' #606060', fontWeight: '500'
                                }} value={selectedOption} onChange={handleOptionChange}>
                                    <option value="/">ADMIN</option>
                                    <option value="/create">Add Blog</option>
                                    <option value="/tou">Add Tours</option>
                                    <option value="/count">Add Offers</option>
                                    <option value="/hilll">Add services</option>
                                    <option value="/booking">Bookings</option>
                                </select>
                            </li>
                        }
                        <div>
                            {
                                currentUser ?
                                    (<button className='btnq' onClick={logout}>Logout</button>
                                    ) : (

                                        <div>
                                            
                              {/*}  <button className="btnq flex">
                                <a href="/login">Login</a>
                                    </button> */}
                            
                                        </div>

                                    )}
                        </div>

                    </ul>



                   
                </div>

                {/* <div onClick={ShowNav} className="toggleNavbar">

                 <img src={userAvatar} alt='user profile'  ref={profileActionRef}  onClick={toggleProfileAction}/>
                        </div>*/}

<div onClick={toggleNav} className="closeNavbar">
                        {showNav ? <AiFillCloseCircle className="icone" /> : <GoThreeBars className="icone" />}
                    </div>

            </header>

        </section>
    )
}
export default Navbar