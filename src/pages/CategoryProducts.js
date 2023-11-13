import React, { useState, useEffect } from 'react';
import { getCategoryProducts } from '../services/TourService';
import { useParams, useNavigate } from 'react-router-dom';
import './categoryProducts.css';
import Testimonial from '../components/Testimonial/Testimonial';

const CategoryProducts = () => {
  const [products, setProducts] = useState([]);
  const { id: categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getCategoryProducts(categoryId);
      setProducts(products);
    };
    fetchProducts();
  }, [categoryId]);

  const navigate = useNavigate();

  return (
    <section className="offer container section">
      <div className="seIntro">
        <h2 className="secTtle gradient__text">OUR FEATURED PRODUCTS </h2>
        <p>Access millions of products</p>
      </div>
      <div className="ghft grid">
        {products.map((product) => (
          <div key={product.id} className="singleoffer">
             <div className="pri ">
            <h1 className='proh'>{product.title}</h1>
            

          </div>
            <div className="offerBody">
           
                
                <div className="amenities flex">
                  <div className="singleAmenities flex">
                    <h6>{product.description.trim()}</h6>
                  </div>
                </div>

                
                <div className="action">
                  <button
                    className="buttong"
                    onClick={() => {
                      console.log(`Navigating to /product/${product.id}`);
                      navigate(`/product/${product.id}`);
                    }}
                  >
                    View More
                  </button>
                </div>
                
              </div>
            </div>
          
        ))}
      </div>
      
    </section>
    
    
  );

};

export default CategoryProducts;
