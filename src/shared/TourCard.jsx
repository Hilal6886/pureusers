import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import './tour-card.scss';
import {
  deleteDoc,
  doc,
 
} from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";
import useAdmin from "../utils/hooks";

const TourCard = ({ tour }) => {
  const [loading, setLoading] = useState(true);
  const isAdmin = useAdmin();
  const { id, imgUrl, city, price, title } = tour;
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

  return (
    <div className="singlefr">
      <div className="tour_img">
        <img src={imgUrl} alt="tour-img" />
        <span>Featured</span>
      </div>
      <div className="card_top d-fex align-items-center justify-content-between">
        <span className="tour_location d-flex align-items center justify-content gap-1 ">
          <i className="ri-map-pin-line"></i> {city}
        </span>
      </div>
      <h5 className="tour_title">
        <Link to={`/tour/${id}`}>{title}</Link>
      </h5>
      <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
        <h5>₹{price} <span> /per person</span></h5>
        {/**<button className="btnu booking_btn">
          <Link to={`/tour/${id}`}> Book Now</Link>
        </button>*/}
      </div>
      {isAdmin && (

<div style={{ float: "right" }}>

<i class="ri-delete-bin-line"
  style={{ margin: "15px", cursor: "pointer",color:"red" }}
  size="2x"
  onClick={() => handleDelete(id)}
></i>
<Link to={`/tous/${id}`}>
<i class="ri-edit-box-line"
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
