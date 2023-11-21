// Import necessary packages
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './featuredproduct.css';

const UpdateFeaturedProduct = () => {
  const { featuredproductId } = useParams();
  const [product, setProduct] = useState({
    title: '',
    description: '',
    companyuser: 0,
    users: [],
  });
  const navigate = useNavigate();

  const handleProductChange = (e) => {
    const { name, value } = e.target;
  
    // Remove commas from the value if it's the "companyuser" field
    const sanitizedValue = name === 'companyuser' ? value.replace(/,/g, '') : value;
  
    setProduct({
      ...product,
      [name]: sanitizedValue,
    });
  };
  

  const handleUserChange = (e, index) => {
    const { name, value } = e.target;
    const updatedUsers = [...product.users];
    updatedUsers[index] = {
      ...updatedUsers[index],
      [name]: value,
    };
    setProduct({
      ...product,
      users: updatedUsers,
    });
  };

  const handleRemoveUser = (index) => {
    const updatedUsers = [...product.users];
    updatedUsers.splice(index, 1);
    setProduct({
      ...product,
      users: updatedUsers,
    });
  };

  const handleAddUser = () => {
    setProduct({
      ...product,
      users: [...product.users, { companyName: '', companyWebsite: '', country: '', revenue: '' }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = doc(db, 'fatured products', featuredproductId);
      await updateDoc(docRef, product);
      toast.success('Product updated successfully');
    } catch (error) {
      console.error('Error updating product:', error);
      toast.error('Error updating product');
    }
  };
// Featuredproduct.js

// ...

useEffect(() => {
  console.log('Fetching data for Featured Product ID:', featuredproductId);
  const fetchData = async () => {
    try {
      const docRef = doc(db, 'fatured products', featuredproductId); // Corrected collection name
      console.log('Firestore Query:', docRef.path);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log('Fetched product data:', data);
        setProduct(data);
      } else {
        console.error(`Document with ID ${featuredproductId} not found`);
      }
    } catch (error) {
      console.error('Error fetching document:', error);
    }
  };

  fetchData();
}, [featuredproductId]);

// ...


  return (
    <div className="containery">
      <h2>Edit/Update Featured Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleProductChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleProductChange}
            required
          />
        </div>
        <div>
          <label>Companies using this product:</label>
          <input
            type="text"
            name="companyuser"
            value={product.companyuser}
            onChange={handleProductChange}
            required
          />
        </div>

        {/* Users */}
        <h3>Users</h3>
        {product.users.map((user, index) => (
          <div key={index}>
            <div>
              <label>Company Name:</label>
              <input
                type="text"
                name="companyName"
                value={user.companyName}
                onChange={(e) => handleUserChange(e, index)}
                required
              />
            </div>
            <div>
              <label>Company Website:</label>
              <input
                type="text"
                name="companyWebsite"
                value={user.companyWebsite}
                onChange={(e) => handleUserChange(e, index)}
                required
              />
            </div>
            <div>
              <label>Country:</label>
              <input
                type="text"
                name="country"
                value={user.country}
                onChange={(e) => handleUserChange(e, index)}
                required
              />
            </div>
            <div>
              <label>Revenue:</label>
              <input
                type="text"
                name="revenue"
                value={user.revenue}
                onChange={(e) => handleUserChange(e, index)}
                required
              />
            </div>
            <div>
              <button type="button" onClick={() => handleRemoveUser(index)}>
                Remove User
              </button>
            </div>
          </div>
        ))}
        <div>
          <button type="button" onClick={handleAddUser}>
            Add User
          </button>
        </div>

        <button type="submit">Update Product</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateFeaturedProduct;
