import React, {useRef, useState} from 'react';
import { Link ,useNavigate} from "react-router-dom";
import './navbar.scss'
import logo from './qw.png'
import {AiFillCloseCircle} from 'react-icons/ai'
import userAvatar from '../../assets/images/avatar.png'
import useAuth from '../custom-hooks/useAuth'
import {signOut} from "firebase/auth"
import { auth } from "../../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAdmin from '../../utils/hooks';


const Navbar = ({user}) => {
    const userId = user?.uid
    console.log('userId',userId)
    console.log('name',user?.displayName)
    const [selectedOption, setSelectedOption] = useState('/admin');
    const navigate = useNavigate();
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
      navigate(event.target.value);
    }
   const [active, setActive] = useState('navBar')
    const ShowNav = ()=>{
        setActive('navBar activeNavbar')
    }
    const removeNavbar= ()=>{
        setActive('navBar ')
    }
    const {currentUser} =useAuth()
    const isAdmin = useAdmin();
    const profileActionRef = useRef(null)
    const toggleProfileAction = ()=> profileActionRef
    .toggle('show_profileActions')
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
                       <div className="flex">
                        <img src={logo} alt='logo'/>
                       </div>

                    </a>

                </div>

                <div className="navBar">
                 <ul className="navLists flex">
                 
                 
                    <li className="NavItem">
                        <a href="/home" className="navLink">HOME</a>
                    </li>
                    <li className="NavItem">
                        <a href="/Tourss" className="navLink">TOURS</a>
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
                        <a href="/CBlog" className="navLink">BLOG</a>
    </li>
                  

                    <li className="NavItem">
                        <a href="/contact-us" className="navLink">CONTACT</a>
                    </li>
                    {isAdmin && 
                   
                   <li className='NavItem'>
                   <select   style={{ border: 'none', outline:'none', WebkitAppearance: 'none', MozAppearance: 'none', 
                   appearance: 'none', padding: '0.5rem', backgroundColor: 'transparent' ,
                    fontSize: '1rem', color: ' #606060',  fontWeight: '500' }} value={selectedOption} onChange={handleOptionChange}>
                   <option value="/">ADMIN</option>
                     <option value="/create">Add Blog</option>
                     <option value="/tou">Add Tours</option>
                     <option value="/count">Add Offers</option>
                     <option value="/hilll">Add services</option>
                     <option value="/booking">Bookings</option>
                   </select>
                 </li>
}
                    <div className="profile_action" ref={profileActionRef}
                    onClick={toggleProfileAction}>
                        {
                            currentUser ?
                            ( <button className='btnq' onClick={logout}>Logout</button> 
                            ) :(

                            <div>
                               
                    <button className="btnq flex">
                    <a href="/login">Login</a>
                            

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