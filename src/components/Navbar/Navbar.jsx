import React, {useState} from 'react';
import './navbar.scss'

import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
    const [active, setActive] = useState('navBar')
    const ShowNav = ()=>{
        setActive('navBar activeNavbar')
    }
    const removeNavbar= ()=>{
        setActive('navBar ')
    }
  
    return(
        <section className="navBarSection">
        <header className="header flex">
                <div className="logoDev">
                    <a href="/home" className="logo">
                        <h1 className="flex">
                        Quantum Tour And Travels
                        </h1>

                    </a>

                </div>
                <div className={active}>
                 <ul className="navLists flex">
                 
                    <li className="navItem">
                        <a href="/home" className="navLink">HOME</a>
                    </li>

                    <li className="navItem">
                    <a href="/offers" className="navLink">OFFERS</a>
                    </li>

                    <li className="navItem">
                    <a href="/services" className="navLink">SERVICES</a>
                    </li>

                    <li className="navItem">
                        <a href="/about" className="navLink">ABOUT</a>
                    </li>

                    <li className="navItem">
                        <a href="/blogs" className="navLink">BLOG</a>
                    </li>

                    <li className="navItem">
                        <a href="/contact-us" className="navLink">CONTACTUS</a>
                    </li>

                    <button className="btn">
                            <a href="/contact-us">Book Now</a>
                    </button>                
                 </ul>
                 <div onClick={removeNavbar} className="closeNavbar">
                    <AiFillCloseCircle className="icone"/>
                 </div>
                </div>
    
                 <div onClick={ShowNav}className="toggleNavbar">
                    <TbGridDots className="icone"/>                    
                 </div>

        </header>

        </section>
    )
}
export default Navbar