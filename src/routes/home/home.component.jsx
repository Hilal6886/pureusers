import { Component,useState } from "react";
import Layout from "../../components/layout/layout.component"
import Home from "../../components/Home/Home.jsx"
import Main from "../../components/Main/Main.jsx"
import Experience from "../../components/Experience/Experience.jsx"
import  Gallary from "../../components/Gallary/Gallary.jsx"
import  Testimonial from "../../components/Testimonial/Testimonial.jsx"
import OfferRoute from "../Offer/Offer-route.component";





class HomeRoute extends Component {
  

  
  render(){
    
    
    return (
      <div>
     
       <Home/>
      <Main/>
      <Experience/>
      <Gallary/>
      <OfferRoute/>
      <Testimonial/>
      
    
    
    
    
      </div>
      
     
     
      
      
    
    )
  }
}
export default HomeRoute;
