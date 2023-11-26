import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import people from '../../assets/people.png';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';
import img6 from '../../assets/6.png';
import img7 from '../../assets/7.png';
import img8 from '../../assets/8.png';
import img9 from '../../assets/9.png';
import img10 from '../../assets/10.png';
import img11 from '../../assets/11.png';
import img12 from '../../assets/12.png';
import img13 from '../../assets/13.png';
import img14 from '../../assets/14.png';
import img15 from '../../assets/15.png';
import img16 from '../../assets/16.png';
import img17 from '../../assets/17.png';
import img18 from '../../assets/18.png';
import img19 from '../../assets/19.png';
import img20 from '../../assets/20.png';
import img21 from '../../assets/21.png';
import img22 from '../../assets/22.png';
import img23 from '../../assets/23.png';
import img24 from '../../assets/24.png';
import img25 from '../../assets/25.png';
// ... (import other images)

import CategoryDropdown from './CategoryDropdown'; // Import the CategoryDropdown component

// import other necessary components and functions
import { getCategories } from '../../services/TourService';

import './header.css';

const Home = () => {
  // State variable for search input
  const [searchInput, setSearchInput] = useState('');

  // State variable for storing the list of categories
  const [categories, setCategories] = useState([]);

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getCategories();
        setCategories(categories);
      } catch (error) {
        // Handle any error that occurs during the API call
        console.error('Error fetching categories:', error);
        setCategories([]); // Set categories to an empty array in case of an error
      }
    };
    fetchCategories();
  }, []);

  // Filter categories based on search input
  const filteredCategories = categories.filter((category) =>
    category.name && category.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  // useNavigate hook to handle navigation
  const navigate = useNavigate();

  // Function to handle navigation to the products page for a specific category
  const handleCategoryClick = (categoryId) => {
    navigate(`/products/${categoryId}`);
  };

  const carouselImages = [img1, img2,  img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,]; // Add other carousel images here

  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="custom-heading gradient__text">
          Empower Your  Growth with  Pure Users
        </h1>
        <p>
          At Pure Users, we empower businesses to boost
          sales by efficiently identifying, prioritizing, and engaging
          with prospects who are most likely to benefit from and purchase your solutions.
          Our innovative approach streamlines the sales process,
          ensuring a focused and effective strategy to drive success for your business.
        </p>
        <p className="custom-paragraph">
          Browse Powerful Software Solutions by Category
        </p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search ......"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          {searchInput.length > 0 && (
            <CategoryDropdown categories={filteredCategories} onCategoryClick={handleCategoryClick} />
          )}
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="dfgdgf" />
          <p>5,600 people requested access a visit in the last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <Carousel showArrows={false} showStatus={false} showIndicators={false} autoPlay interval={1500} infiniteLoop>
          {carouselImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
