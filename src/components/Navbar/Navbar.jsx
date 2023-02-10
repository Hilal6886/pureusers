import React, {useRef, useState} from 'react';
import './navbar.scss'

import {AiFillCloseCircle} from 'react-icons/ai'
import userAvatar from '../../assets/images/avatar.png'
import useAuth from '../custom-hooks/useAuth'
import {signOut} from "firebase/auth"
import { auth } from "../../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {


   const [active, setActive] = useState('navBar')
    const ShowNav = ()=>{
        setActive('navBar activeNavbar')
    }
    const removeNavbar= ()=>{
        setActive('navBar ')
    }
    const {currentUser} =useAuth()
    const profileActionRef = useRef(null)
    const toggleProfileAction = ()=> profileActionRef.
    toggle('show_profileActions')
    const logout =()=>{
       
        signOut(auth).then(()=>{
           toast.success('logged out') 
        }).catch(err=>{
            toast.error(err.message)

        })
    }

  
    return(
        <section className="navBarSection">
        <header className="header flex">
                <div className="logoDev">
                    <a href="/home" className="logo">
                        <h2 className="flex">
                        Quantum Tour And Travels
                        </h2>

                    </a>

                </div>

                <div className={active}>
                 <ul className="navLists flex">
                 
                 
                    <li className="NavItem">
                        <a href="/home" className="navLink">HOME</a>
                    </li>
                    <li className="NavItem">
                        <a href="/Tours" className="navLink">TOURS</a>
                    </li>

                    <li className="NavItem">
                    <a href="/offers" className="navLink">OFFERS</a>
                    </li>

                    <li className="NavItem">
                    <a href="/services" className="navLink">SERVICES</a>
                    </li>

                    <li className="NavItem">
                        <a href="/about" className="navLink">ABOUT</a>
                    </li>

                    <li className="NavItem">
                        <a href="/blogs" className="navLink">BLOG</a>
                    </li>

                    <li className="NavItem">
                        <a href="/contact-us" className="navLink">CONTACT</a>
                    </li>
                    <div className="profile_action" ref={profileActionRef}
                    onClick={toggleProfileAction}>
                        {
                            currentUser ?
                            ( <button className='btnq' onClick={logout}>Logout</button> 
                            ) :(

                            <div>
                               
                    <button className="btnq">
                    <a href="/Login">SIGN IN</a>
                            
                    </button> 
                    
                    <button className="btnq">
                            <a href="/Signup">SIGN UP</a>
                    </button> 
                            </div>

                      )  }
                        </div> 
     
                         
                 </ul>
                

        
                 <div onClick={removeNavbar} className="closeNavbar">
                    <AiFillCloseCircle className="icone"/>
                 </div>
                </div>
    
                 <div onClick={ShowNav} className="toggleNavbar">
                 <img src={currentUser? currentUser.photoURL: userAvatar} alt='user profile'  onClick={toggleProfileAction}/>
                 
                 </div>
                 <ToastContainer />


        </header>

        </section>
    )
}
export default Navbar