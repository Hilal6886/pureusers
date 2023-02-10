import "./App.scss";
import HomeRoute from "./routes/home/home.component";
import ServicesRoute from "./routes/service-offered/service-offered.component";
import OfferRoute from "./routes/Offer/Offer-route.component.jsx"
import BlogRoute from "./routes/blog/blog-route.component.jsx"
import AboutRoute from "./routes/about/about-route.component.jsx"
import ContactRoute from "./routes/Contact/Contact-route.component.jsx";
import LoginRoute from "./routes/Login/Login-route.component.jsx"
import SignupRoute from "./routes/Signup/Signup-route.component.jsx"
import ToursRoute from "./routes/Tours/Tours-route.component.jsx"
import TourDetailsRoute from "./routes/TourDetails/TourDetails-route.component.jsx"
import ThankYouRoute from "./routes/ThankYou/ThankYou-route.component.jsx"


import firebaseConfig from "./config/firebase.jsx";
import { initializeApp } from "firebase/app";
import { Routes, Route,  } from "react-router-dom";
import ThankYou from "./components/ThankYou/ThankYou";
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  initializeApp(firebaseConfig);
  return (
  
    <Routes>
    
      
    <Route path="/" element={<HomeRoute />} />
      <Route path="/home" element={<HomeRoute />} />
      <Route path="/services" element={
      <ProtectedRoute>
      <ServicesRoute />
      </ProtectedRoute> } />
      <Route path="/offers" element={
      <ProtectedRoute>
        <OfferRoute /> 
      </ProtectedRoute>} />
      <Route path="/featured-tours" element={<HomeRoute /> } />
      <Route path="/Experience" element={<HomeRoute /> } />
      <Route path="/Gallary" element={<HomeRoute /> } />
      <Route path="/Testimonial" element={<HomeRoute /> } />
      <Route path="/blogs" element={
      <ProtectedRoute>
      <BlogRoute /> 
      </ProtectedRoute>} />
      <Route path="/about" element={
      <ProtectedRoute>
      <AboutRoute /> 
      </ProtectedRoute>} />
      <Route path="/contact" element={
      <ProtectedRoute>
      <ContactRoute />
      </ProtectedRoute> } />
      <Route path="/Login" element={<LoginRoute /> } />
      <Route path="/Signup" element={<SignupRoute /> } />
      <Route path="/tours" element={
      <ProtectedRoute>
      <ToursRoute /> 
      </ProtectedRoute>} />
      <Route path="/tour/:id" element={
      <ProtectedRoute>
      <TourDetailsRoute />
      </ProtectedRoute> } />
      <Route path="/ThankYou" element={
      <ProtectedRoute>
      <ThankYouRoute/>
      </ProtectedRoute> } />

    </Routes>
    
  );
};

export default App;
