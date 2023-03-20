import React, {useState,useEffect} from 'react'
import './booking.scss'
import {  Form,FormGroup,ListGroup,ListGroupItem,Button} from 'reactstrap'
import {useNavigate} from 'react-router-dom'
import { getAllTours } from '../../services/TourService';
import {useParams} from 'react-router-dom'
import { db } from '../../firebase';
import { collection ,addDoc} from "firebase/firestore";
import { auth } from '../../firebase';


const Booking = ({avgRating}) => {
    const [tours, setTours] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        userId: '', // latr it will dy
        userEmail: '',
        fullName: '',
        phone: '',
        guestSize: '',
        bookAt:'',
        tourid:''
    })

    useEffect(() => {
      async function fetchData() {
        const result = await getAllTours();
        setTours(result);
      }
      fetchData();
     
      
      
    }, []);
    const tour = tours.find(tour=> tour.id === id)
    if (!tour) {
      return <div>Tour not found</div>;
    }
    const {price,reviews} = tour;
   


    const handleChange = e => {
        setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
    };

    const serviceFee = 10
    const totalAmount = Number(price) * Number(credentials.guestSize) +
    Number (serviceFee)
   // snd date to server
 
   
   // ...
  
  
    // Check if fullName is not empty or undefined
   
  
    const handleClick = async (e) => {
      e.preventDefault();
    
      try {
        // get the currently logged-in user
        const user = auth.currentUser;
        // add the booking to the 'bookings' collection
        const bookingRef = await addDoc(collection(db, 'bookings'), {
          userId: user.uid,
          userEmail: user.email,
          fullName: credentials.fullName,
          phone: credentials.phone,
          guestSize: credentials.guestSize,
          bookAt: credentials.bookAt,
          totalAmount: totalAmount,
          createdAt: new Date(),
          tourId:tour.id
        });
        console.log('Booking added with ID: ', bookingRef.id);
        navigate("/ThankYou");
      } catch (error) {
        console.error('Error adding booking: ', error);
      }
    };
    
  
   



  return <div className="booking">
    <div className="booking_top d-flex align-items-center justify-content-between">
        <h3>${price} <span>/per person</span></h3>
        <span className="tour_ratings d-flex align-items center justify-content gap-1 ">
<i class="ri-star-line"></i>
 {avgRating === 0 ? null :
  avgRating} ({reviews?.length})
 

</span>
    </div>
    <div className="booking_form">
        <h5>Information</h5>
        <Form className='booking_info-form' onSubmit={handleClick}>
            <FormGroup>
                <input type='text' placeholder='Full Name' id='fullName'
                required onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <input type='number' placeholder='phone' id='phone'
                required onChange={handleChange} />
            </FormGroup>
            <FormGroup className='d-flex align-items-center gap-3'>
                <input type='date' placeholder='' id='bookAt'
                required onChange={handleChange} />
                 <input type='number' placeholder='Guest' id='guestSize'
                required
                 onChange={handleChange} />
            </FormGroup>

        </Form>
    </div>

    <div className="booking_bottom">
        <ListGroup>
            <ListGroupItem className='border-0 px-0'>
                <h5 className='d-flex align-items-center gap-1'>
                    ${price}  <i class='ri-close-line'></i> 1 person</h5>
                <span>${price}</span>

            </ListGroupItem>
            <ListGroupItem className='border-0 px-0'>
                <h5>Service charge</h5>
                <span>${serviceFee}</span>

            </ListGroupItem>
            <ListGroupItem className='border-0 px-0 total' >
                <h5>Total</h5>
                <span>${totalAmount}</span>

            </ListGroupItem>
        </ListGroup>
        <button className='btna primary_btn w-100% mt-4' onClick={handleClick}> Book Now</button>
    </div>
  </div>
}

export default Booking