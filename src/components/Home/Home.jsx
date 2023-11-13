import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import people from '../../assets/people.png';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
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

  const carouselImages = [img1, img2]; // Add other carousel images here

  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="custom-heading gradient__text">
        Empower Your <br/> Growth with <br/>  <span className="highlight">Pure Users</span>
        </h1>
        <p className="custom-paragraph">
        Browse Powerful Software Solutions by Category
        </p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search categories"
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
