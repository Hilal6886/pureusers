import React, { useState, useEffect } from 'react';
import { getCategories, updateCategory, deleteProduct } from '../services/TourService';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { deleteDoc, doc, getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { toast } from 'react-toastify';
import './table.css';

const Table = () => {
  const [categories, setCategories] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [selectedAlphabet, setSelectedAlphabet] = useState('');
  const navigate = useNavigate();
  const userData = localStorage.getItem('USER');
  let currentUser = null;
  let isAdmin = false;
  if (userData) {
    currentUser = JSON.parse(userData);
    isAdmin = currentUser.isAdmin;
  }

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    navigate(`/categories/${categoryId}`);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleAlphabetClick = (alphabet) => {
    setSelectedAlphabet(alphabet);
  };

  const handleDelete = async (categoryId) => {
    if (window.confirm('Are you sure you want to delete this category and all its products?')) {
      try {
        // Delete all products associated with the selected category
        const productsQuery = query(
          collection(db, 'products'),
          where('categoryId', '==', categoryId)
        );
        const productsSnapshot = await getDocs(productsQuery);
        productsSnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref);
        });

        // Delete the selected category
        await deleteDoc(doc(db, 'categories', categoryId));
        toast.success('Category and its products deleted successfully');
        setCategories(categories.filter((category) => category.id !== categoryId));
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleEdit = async (categoryId) => {
    navigate(`/categories/${categoryId}`);
  };

  const filteredCategories = selectedAlphabet
    ? categories.filter((category) =>
      category.name && category.name.toLowerCase().startsWith(selectedAlphabet.toLowerCase())
    )
    : categories;

  const searchFilteredCategories = filteredCategories.filter((category) =>
    category.name && category.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <section className="offer container section">
        <div className="seIntroy">
          <h2 className="gradient__text">SOFTWARE CATEGORIES</h2>
          <p>Filter all the categories</p>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={handleSearchInputChange}
          />
        </div>
        <div>
          {Array.from(Array(26), (_, index) => (
            <button key={index} onClick={() => handleAlphabetClick(String.fromCharCode(65 + index))}>
              {String.fromCharCode(65 + index)}
            </button>
          ))}
        </div>
        <table>
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Actions</th>
            </tr>
            <tbody>
              {searchFilteredCategories.map((category) => (
                <tr key={category.id}>

                  <td>
                    <Link to={`/products/${category.id}`}>
                      {category.name}
                    </Link>
                  </td>
                  {isAdmin && (
                    <td>
                      <i
                        className="ri-delete-bin-line"
                        style={{ margin: '15px', cursor: 'pointer', color: 'red' }}
                        size="2x"
                        onClick={() => handleDelete(category.id)}
                      ></i>
                      <i
                        className="ri-edit-box-line"
                        style={{ cursor: 'pointer' }}
                        size="2x"
                        onClick={() => handleEdit(category.id)}
                      ></i>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </thead>
        </table>
      </section>
    </>
  );
};

export default Table;
