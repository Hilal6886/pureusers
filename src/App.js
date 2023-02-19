import { useState, useEffect } from "react";
import "./App.scss";
import "./style.scss";
import Navbar from "./components/Navbar/Navbar.jsx"
import Footer from "./components/Footer/Footer"
import HomeRoute from "./routes/home/home.component";
import ServicesRoute from "./routes/service-offered/service-offered.component";
import OfferRoute from "./routes/Offer/Offer-route.component.jsx"
import BlogRoute from "./routes/blog/blog-route.component.jsx"
import AboutRoute from "./routes/about/about-route.component.jsx"
import ContactRoute from "./routes/Contact/Contact-route.component.jsx";

import ToursRoute from "./routes/Tours/Tours-route.component.jsx"
import TourDetailsRoute from "./routes/TourDetails/TourDetails-route.component.jsx"
import ThankYouRoute from "./routes/ThankYou/ThankYou-route.component.jsx"
import firebaseConfig from "./config/firebase.jsx";
import Auth from "./pages/Auth";
import { initializeApp } from "firebase/app";
import { Routes, Route, useNavigate,  } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute'
import { auth } from "./firebase";
import Detail from "./pages/Detail";
import TagBlog from "./pages/TagBlog";
import CategoryBlog from "./pages/CategoryBlog";
import AddEditBlog from './pages/AddEditBlog';

import CreateContainer from "./pages/CreateContainer";
import Blog from "./components/Blog/Blog";
import Blogs from "./pages/Blogs";
import CBlog from "./pages/CBlog";







const App = () => {
  initializeApp(firebaseConfig);

  const [active, setActive] = useState("Home");
  const [user, setUser] = useState(null);

  const Navigate = useNavigate();


  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <div className="App">
    <Navbar
   
      active={active}
      user={user}
      />

  
     
    

    <Routes>


      <Route path="/" element={<HomeRoute />} />
      <Route path="/home" element={<HomeRoute />} />
      <Route path="/services" element={
        <ProtectedRoute>
          <ServicesRoute />
        </ProtectedRoute>} />
      <Route path="/offers" element={
        <ProtectedRoute>
          <OfferRoute />
        </ProtectedRoute>} />
      <Route path="/featured-tours" element={<HomeRoute />} />
      <Route path="/Experience" element={<HomeRoute />} />
      <Route path="/Gallary" element={<HomeRoute />} />
      <Route path="/Testimonial" element={<HomeRoute />} />
      <Route
          path="CBlog"
          element={ <CBlog setActive={setActive} active={active} user={user}/>  }
        />

      
      <Route path="/about" element={
        <ProtectedRoute>
          <AboutRoute />
        </ProtectedRoute>} />
      <Route path="/contact" element={
        <ProtectedRoute>
          <ContactRoute />
        </ProtectedRoute>} />
     
      <Route path="/tours" element={
        <ProtectedRoute>
          <ToursRoute />
        </ProtectedRoute>} />
      <Route path="/tour/:id" element={
        <ProtectedRoute>
          <TourDetailsRoute />
        </ProtectedRoute>} />
      <Route path="/ThankYou" element={<ThankYouRoute />} />
      <Route path="/Container" element={<CreateContainer />} />
    
      <Route
          path="/auth"
          element={<Auth setActive={setActive} setUser={setUser} />}
        />
     
             <Route
          path="/create"
          element={
            user?.uid ? <AddEditBlog user={user}  /> : <Navigate to="CBlog" />
          }
        />
        <Route
          path="/update/:id"
          element={
            user?.uid ? (
              <AddEditBlog user={user} setActive={setActive} />
            ) : (
              <Navigate to="CBlog" />
            )
          }
        />
        <Route
          path="cblog"
          element={<CBlog setActive={setActive} user={user} />}
        />
        <Route
          path="/search"
          element={<CBlog setActive={setActive} user={user} />}
        />
        
         <Route path="/tag/:tag" element={<TagBlog setActive={setActive} />} />
        <Route path="/category/:category" element={<CategoryBlog setActive={setActive}  />} />
        <Route path="/blogs" element={<Blogs setActive={setActive} />} />
      
   
    
      





    </Routes>
    <Footer/>
    </div>
    







  );
};

export default App;
