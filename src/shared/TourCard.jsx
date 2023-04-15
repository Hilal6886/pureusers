import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './tour-card.scss';
import { MdLocationOn } from 'react-icons/md';
import {
  deleteDoc,
  doc,

} from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { MdAirportShuttle } from 'react-icons/md';

const TourCard = ({ tour }) => {
  const [loading, setLoading] = useState(true);
  const userData = localStorage.getItem("USER")
  let currentUser = null
  let isAdmin = false
  if (userData) {
    currentUser = JSON.parse(userData)
    isAdmin = currentUser.isAdmin;
  }
  const { id, imgUrl, city, price, title, distance } = tour;
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure wanted to delete that blog ?")) {
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
  useEffect(() => {
    Aos.init({ duration: 2000 });

  });

  return (
    <div data-aos="fade-up" className="singlefr">
      <div data-aos="fade-up" className="destImage">
        <img src={imgUrl} alt='tour' />

        <span className="discount">30% off</span>
      </div>
      <div className="offerBody">
        <div className="price flex">
          <h6>₹{price}</h6>

          <span className="status">Featured</span>
        </div>
        <h5 className="tour_title">
          <Link to={`/tour/${id}`}>{title}</Link>
        </h5>
       
        <div className="singleAmenities flex">

                      <i className="ri-map-pin-2-line"></i> {city}

                    </div>
      <div className="singleAmenities flex">


<i class="ri-time-line"></i>  <small>Duration</small>{distance}
</div>
        <button className="btnu flex">
          <Link to={`/tour/${id}`}> Book Now</Link>
        </button>
      </div>
     

     
      {isAdmin && (

        <div style={{ float: "right" }}>

          <i className="ri-delete-bin-line"
            style={{ margin: "15px", cursor: "pointer", color: "red" }}
            size="2x"
            onClick={() => handleDelete(id)}
          ></i>
          <Link to={`/tous/${id}`}>
            <i className="ri-edit-box-line"
              style={{ cursor: "pointer" }}
              size="2x"
            > </i>
          </Link>
        </div>

      )}
    </div>
  );
};

export default TourCard;
