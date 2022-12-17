import "./App.css";
import HomeRoute from "./routes/home/home.component";
import ServicesRoute from "./routes/service-offered/service-offered.component";
import OfferRoute from "./routes/Offer/Offer-route.component.jsx"
import BlogRoute from "./routes/blog/blog-route.component.jsx"
import AboutRoute from "./routes/about/about-route.component.jsx"

import ContactUs from "./routes/contact-us/contact-us.component";
import firebaseConfig from "./config/firebase.jsx";
import { initializeApp } from "firebase/app";
import { Routes, Route } from "react-router-dom";
const App = () => {
  initializeApp(firebaseConfig);
  return (
    <Routes>
      <Route path="/" element={<HomeRoute />} />
      <Route path="/home" element={<HomeRoute />} />
      <Route path="/services" element={<ServicesRoute /> } />
      <Route path="/offers" element={<OfferRoute /> } />
      <Route path="/featured-tours" element={<HomeRoute /> } />
      <Route path="/blogs" element={<BlogRoute /> } />
      <Route path="/about" element={<AboutRoute /> } />
      <Route path="/contact-us" element={<ContactUs /> } />
    </Routes>
  );
};

export default App;
