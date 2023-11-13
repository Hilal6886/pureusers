import { useState, useEffect } from "react";
import "./App.scss";
import "./style.scss";
import Navbar from "./components/Navbar/Navbar.jsx"
import Footer from "./components/Footer/Footer"
import HomeRoute from "./routes/home/home.component";
import OfferRoute from "./routes/Offer/Offer-route.component.jsx"

import ContactRoute from "./routes/Contact/Contact-route.component.jsx";
import ToursRoute from "./routes/Tours/Tours-route.component.jsx"
import TourDetailsRoute from "./routes/TourDetails/TourDetails-route.component.jsx"

import firebaseConfig from "./config/firebase.jsx";

import { initializeApp } from "firebase/app";
import { Routes, Route, useNavigate,  } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute'
import { auth } from "./firebase";
import TagBlog from "./pages/TagBlog";
import CategoryBlog from "./pages/CategoryBlog";
import AddEditBlog from './pages/AddEditBlog';
import Blogs from "./pages/Blogs";
import CBlog from "./pages/CBlog";
import Detail from './pages/Detail';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Reset from "./pages/Reset";
import VarifyEmail from "./pages/VerifyEmail";
import {AuthProvider} from './pages/AuthContext'
import {onAuthStateChanged} from 'firebase/auth'
import AddTours from "./pages/AddTours";
import CreateContainer from "./pages/CreateContainer";
import BookingList from "./pages/Bookings";

import useAdmin from "../src/utils/hooks"
import Varifyotp from "./components/Booking/VerifyOtp";
import Table from "./pages/Table";
import CategoryProducts from "./pages/CategoryProducts";
import Category from "./pages/Category";






const App = () => {

  

  const [active, setActive] = useState("CBlog");
  const [user, setUser] = useState(null);
  const location = useLocation();


  const Navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)
  useAdmin()
  

  


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user||{});
      setCurrentUser(user||{})
      console.log("USERRRRRRRRRRRRRRRRRRRRRRRRR",user)
    })
  }, [])
  
  return (
    <div className="App">
    <Navbar
   
      active={active}
      user={user}
      />

  
     
<AuthProvider value={{currentUser, timeActive, setTimeActive}}>

    <Routes>


      <Route path="/" element={<HomeRoute />} />
      <Route path="/home" element={<HomeRoute />} />
     
      <Route path="/offers" element={
        
          <OfferRoute />
        } />
      <Route path="/featured-tours" element={<HomeRoute />} />
      <Route path="/Experience" element={<HomeRoute />} />
   
     
      <Route path="/Testimonial" element={<HomeRoute user={user}/>} />
      <Route path="/login" element={<Login />} />
      
      <Route path="/signup" element={
            !currentUser?.emailVerified 
            ? <Signup/>
            : <Navigate to='/' replace/>
          } />
      <Route path="/reset" element={<Reset />} />
      <Route path="/verify-email" element={<VarifyEmail />} />
     
     
      <Route
          path="CBlog"
          element={ <CBlog  setActive={setActive} user={user} active={active} />  }
        />
         <Route
          path="/search"
          element={<CBlog setActive={setActive} user={user} />}
        />
<Route
          path="/detail/:id"
          element={<Detail user={user} />}
        />
      
     
      <Route path="/contact-us" element={
        
          <ContactRoute />
       } />
     
      <Route path="/tourss" element={
        
          <ToursRoute />
       } />
      <Route path="/product/:id" element={
        
          <TourDetailsRoute />
       } />
      
      
      <Route path="/booking" element={
              <ProtectedRoute>
              <BookingList />
              </ProtectedRoute>             
            } />
 
    
      
     
             <Route
          path="/create"
          element={
            <ProtectedRoute>
            <AddEditBlog user={user}  />
            </ProtectedRoute>
          }
        />
        <Route
          path="/update/:id"
          element={          
              <ProtectedRoute>
              <AddEditBlog user={user} setActive={setActive} />
            </ProtectedRoute>
          }
        />
             <Route
          path="/count"
          element={
            <ProtectedRoute>
            <CreateContainer user={user}  />
            </ProtectedRoute>
          }
        />
        <Route
          path="/counts/:id"
          element={
            <ProtectedRoute>
            <CreateContainer user={user} setActive={setActive} />
            </ProtectedRoute>
          }
        />
          <Route
          path="/tou"
          element={
            <ProtectedRoute>
            <AddTours user={user}  />
            </ProtectedRoute>
          }
        />
       <Route
  path="/tours/:id"
  element={
    <ProtectedRoute>
      <AddTours user={user} setActive={setActive} isEditing={location.state?.isEditing || false} />
    </ProtectedRoute>
  }
/>


      
        <Route
          path="/cblog"
          element={
            <CBlog setActive={setActive} user={user} />}
        />
        <Route
          path="/search"
          element={<CBlog setActive={setActive} user={user} />}
        />
        
         <Route path="/tag/:tag" element={<TagBlog setActive={setActive} />} />
        <Route path="/category/:category" element={<CategoryBlog setActive={setActive}  />} />
        <Route path="/blogs" element={<Blogs setActive={setActive} />} />
        <Route path="/verify-otp" element={<Varifyotp/>} />
        <Route path="/table" element={<Table />} />
        <Route  path="/products/:id"  element={<CategoryProducts/>} />
        <Route path="/categories/:categoryId" element={<Category />} />
      
   
    
      





    </Routes>
    </AuthProvider>
    <Footer/>
    
    
  
    </div>
    







  );
};

export default App;
