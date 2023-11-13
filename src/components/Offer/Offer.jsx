



import React, { useEffect, useState } from 'react';
import './offer.scss';
import { MdKingBed } from 'react-icons/md';
import { MdBathtub } from 'react-icons/md';
import { FaWifi } from 'react-icons/fa';
import { MdAirportShuttle } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
  deleteDoc,
  doc,
 
} from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-toastify";

import { getoffer, getAllOffers } from '../../services/offerService';
import { Link } from "react-router-dom";

const Offer = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const userData=localStorage.getItem("USER")
  let currentUser=null
  let isAdmin=false
  if(userData){
      currentUser = JSON.parse(userData)
      isAdmin =currentUser.isAdmin;
  }

  useEffect(() => {
    Aos.init({ duration: 2000 });
    getAllOffers().then((offers) => {
      setOffers(offers);
    });
  }, []);

 
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure wanted to delete that offer ?")) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, "offers", id));
        toast.success("Offer deleted successfully");
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <section data-aos="fade-up" className="offer container section">
      <div data-aos="fade-up" className="secContainer">
        <div className="seIntro">
          <h2 data-aos="fade-up" className="secTtle gradient__text">
            OUR FEATURED PRODUCTS
          </h2>
          <p>Access millions of products</p>
        </div>
        <div data-aos="fade-up" className="ghft grid">
          {offers.map(({ id, imgUrl, stTdeitle, location, price, title }) => {
            return (
              <div data-aos="fade-up"  className="singleoffer" key={id}>
                <div data-aos="fade-up" className="destImage">
                  <img data-aos="fade-up"  src={imgUrl} alt={stTdeitle} />

                  <span className="discount">20% off</span>
                </div>
                <div className="offerBody">
                
                  <div className="price flex ">
                  <h6 className='gradient__text'>{title}</h6>
                  <span className="status" >Featured</span>

                  </div>
                  <div className="amenities flex">
                    <div className="singleAmenities flex">
                    <h6>{price}</h6>
                    </div>
                  </div>
                 
                  <button className="btnn flex">view product</button>
                </div>
                {isAdmin && (

                  <div style={{ float: "right" }}>

                  <i className="ri-delete-bin-line"
                    style={{ margin: "15px", cursor: "pointer",color:"red" }}
                    size="2x"
                    onClick={() => handleDelete(id)}
                  ></i>
                  <Link to={`/counts/${id}`}>
                  <i className="ri-edit-box-line"
                      style={{ cursor: "pointer" }}
                      size="2x"
                    ></i>
                  </Link>
                </div>
      
                )}
               
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offer;
