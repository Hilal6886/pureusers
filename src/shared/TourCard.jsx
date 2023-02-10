import React from 'react'

import {Link} from 'react-router-dom'
import "./tour-card.css";
import calculateAvgRating from '../utils/avgRating';




 const TourCard = ({tour}) => {

  const { id, title, city, photo, price, featured,   reviews     } = tour;
  const {totalRating,avgRating} = calculateAvgRating(reviews)

  
  return (
    
    <div  className="singlefr">
    <div className="tour_img">
<img src={photo} alt='tour-img'/>
<span>Featured</span>

</div>
<div className="card_top d-fex align-items-center justify-content-between">
<span className="tour_location d-flex align-items center justify-content gap-1 ">
<i class="ri-map-pin-line"></i> {city}
</span>
<span className="tour_ratings d-flex align-items center justify-content gap-1 ">
<i class="ri-star-line"></i>
 {avgRating === 0 ? null :
  avgRating}
 {totalRating === 0 ? (
  'Not Rated'
  ) :(
 <span> ({reviews.length})</span> 
)}

</span>

</div>
<h5 className="tour_title"> <Link to={`/tour/${id}`}>{title}</Link>   
</h5>
<div className="card_bottom d-flex align-items-center justify-content-between mt-3">
<h5>${price} <span> /per person</span></h5>
<button className='btn booking_btn'>
<Link to={`/tour/${id}`}> Book Now</Link>

</button>


</div>
  </div>

)

}







    

export default  TourCard;
