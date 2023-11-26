



import React, { useEffect, useState } from 'react';
import './offer.scss';
import { useParams, useNavigate } from 'react-router-dom';

import Aos from 'aos';
import 'aos/dist/aos.css';
import {
  deleteDoc,
  doc,
 
} from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-toastify";

import { fetchProducts  } from '../../services/ProductService';
import { Link } from "react-router-dom";

const Offer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id: productId } = useParams();
  const userData=localStorage.getItem("USER")
  let currentUser=null
  let isAdmin=false
  if(userData){
      currentUser = JSON.parse(userData)
      isAdmin =currentUser.isAdmin;
  }

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fetchProducts();
        setProducts(result);
      } catch (error) {
       
      }
    };

    fetchDataAsync();
  }, []);

 
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure wanted to delete featured product ?")) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, "fatured products", id));
        toast.success("featured product deleted successfully");
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleEdit = async (featuredproductId) => {
    navigate(`/update featured product/${featuredproductId}`);
  };
  return (
    <section data-aos="fade-up" className="offer container section">
      <div data-aos="fade-up" className="secContainer">
        <div className="seIntro">
          <h2 data-aos="fade-up" className="secTtle gradient__text">
            FEATURED PRODUCTS
          </h2>
          <p>Access millions of products</p>
        </div>
        <div data-aos="fade-up" className="ghft grid">
        {products.map((featuredproduct) => {
            return (
              <div data-aos="fade-up"  className="singleoffer" key={ featuredproduct.id }>
                <div data-aos="fade-up" className="destImage">
                  <img data-aos="fade-up"  src={ featuredproduct.imageUrl} alt={ featuredproduct.title} />

                  <span className="discount">20% off</span>
                </div>
                <div className="offerBody">
                
                  <div className="price flex ">
                  <h6 className='gradient__text'>{ featuredproduct.title}</h6>
                  <span className="status" >Featured</span>

                  </div>
                  <div className="amenities flex">
                    <div className="singleAmenities flex">
                    <h6>{featuredproduct.description}</h6>
                    </div>
                  </div>
                 
                  <button
                    className="buttong"
                    onClick={() => {
                      console.log(`Navigating to /featuredproduct/${featuredproduct.id}`);
                      navigate(`/featuredproduct/${featuredproduct.id}`);
                    }}
                  >
                    View More
                  </button>
                </div>
         
                {isAdmin && (
                    <td>
                      <i
                        className="ri-delete-bin-line"
                        style={{ margin: '15px', cursor: 'pointer', color: 'red' }}
                        size="2x"
                        onClick={() => handleDelete(featuredproduct.id)}
                      ></i>
                      <i
                        className="ri-edit-box-line"
                        style={{ cursor: 'pointer' }}
                        size="2x"
                        onClick={() => handleEdit(featuredproduct.id)}
                      ></i>
                    </td>
                  )}
              </div>
            );
          })}
        </div>
        <div className='fid'>
        <Link to="/categories">
        <button className="buttong9"> View All Categories</button>
        </Link>
        </div>
      </div>
     
    </section>
  );
};

export default Offer;
