import "./App.css";
import Home from "./routes/home/home.component";
import ContactUs from "./routes/contact-us/contact-us.component";
import firebaseConfig from "./config/firebase.jsx";
import { initializeApp } from "firebase/app";
import { Routes, Route } from "react-router-dom";
const App = () => {
  initializeApp(firebaseConfig);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/destinatons" element={<Home /> } />
      <Route path="/featured-tours" element={<Home /> } />
      <Route path="/blogs" element={<Home /> } />
      <Route path="/about" element={<Home /> } />
      <Route path="/contact-us" element={<ContactUs /> } />

    </Routes>
  );
};

export default App;
