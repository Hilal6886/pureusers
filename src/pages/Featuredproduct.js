import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, addDoc, collection, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Featuredproduct = () => {
  const {featuredproductId } = useParams();
  const [products, setProducts] = useState([]);

  const handleProductChange = (e, index) => {
    const { name, value } = e.target;
    const updatedProducts = [...products];
    updatedProducts[index] = {
      ...updatedProducts[index],
      [name]: value,
    };
    setProducts(updatedProducts);
  };

  const handleUserChange = (e, productIndex, userIndex, field) => {
    const { value } = e.target;
    const updatedProducts = [...products];
    updatedProducts[productIndex].users[userIndex][field] = value;
    setProducts(updatedProducts);
  };

  const handleRemoveUser = (productIndex, userIndex) => {
    const updatedProducts = [...products];
    updatedProducts[productIndex].users.splice(userIndex, 1);
    setProducts(updatedProducts);
  };

  const handleAddUser = (productIndex) => {
    const updatedProducts = [...products];
    updatedProducts[productIndex].users.push({
      companyName: '',
      companyWebsite: '',
      country: '',
      revenue: '',
    });
    setProducts(updatedProducts);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const productDocs = [];

      // Update products and product users
      for (let i = 0; i < products.length; i++) {
        const product = products[i];

        if (!product.title || !product.description || !product.companyuser) {
          toast.error('All fields are mandatory to fill');
          return;
        }

        const productDocRef = await addDoc(collection(db, 'featured products'), {
          title: product.title,
          description: product.description,
          companyuser: product.companyuser,
          users: product.users,
        });

        productDocs.push(productDocRef);
      }

      // Update the category with the list of product ids
      await updateDoc(doc(db, 'featured product', featuredproductId), {
        products: productDocs.map((doc) => doc.id),
      });

      toast.success('Category and products saved successfully');

      setProducts([]);
    } catch (error) {
      toast.error('Error adding document');
      console.error('Error adding document: ', error);
    }
  };

  useEffect(() => {
    // Fetch data or perform other operations on component mount
  }, []);

  return (
    <div className="container-fluid mb-4">
    <div className="container">
      <div className="col-12">
        <div className="text-center heading py-2">Edit Category</div>
      </div>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-6">
          <form className="row ghy" onSubmit={handleSubmit}>
            {products.length > 0 ? (
              products.map((featuredproduct, productIndex) => (
                <div key={featuredproduct.id || productIndex} className="product-container">
                  <div>
                    <label htmlFor={`title-${productIndex}`}>Product Name:</label>
                    <input
                      type="text"
                      id={`title-${productIndex}`}
                      name="title"
                      className="form-control input-text-box"
                      value={featuredproduct.title}
                      onChange={(e) => handleProductChange(e, productIndex)}
                      required
                    />
                  </div>
                  <div>
                  <label htmlFor={`companyuser-${productIndex}`}>Companies using this product:</label>
                  <input
                    type="number"
                    id={`companyuser-${productIndex}`}
                    name="companyuser"
                    className="form-control input-text-box"
                    rows="3"
                    value={featuredproduct.companyuser}
                    onChange={(e) => handleProductChange(e, productIndex)}
                    required
                  />
                </div>
                  <div>
                    <label htmlFor={`description-${productIndex}`}>Description:</label>
                    <textarea
                      id={`description-${productIndex}`}
                      name="description"
                      className="form-control input-text-area"
                      rows="3"
                      value={featuredproduct.description}
                      onChange={(e) => handleProductChange(e, productIndex)}
                      required
                    ></textarea>
                  </div>
                  

                  {/* Product Users */}
                  <h3>Product Users</h3>
                  {featuredproduct.users.map((user, userIndex) => (
                    <div key={userIndex}>
                      <div>
                        <label>Company Name:</label>
                        <input
                          type="text"
                          value={user.companyName}
                          className="form-control input-text-box"
                          onChange={(e) =>
                            handleUserChange(e, productIndex, userIndex, 'companyName')
                          }
                          required
                        />
                      </div>
                      <div>
                        <label>Company Website:</label>
                        <input
                          type="text"
                          value={user.companyWebsite}
                          className="form-control input-text-box"
                          onChange={(e) =>
                            handleUserChange(e, productIndex, userIndex, 'companyWebsite')
                          }
                          required
                        />
                      </div>
                      <div>
                        <label>Country:</label>
                        <input
                          type="text"
                          value={user.country}
                          className="form-control input-text-box"
                          onChange={(e) =>
                            handleUserChange(e, productIndex, userIndex, 'country')
                          }
                          required
                        />
                      </div>
                      <div>
                        <label>Industry:</label>
                        <input
                          type="text"
                          value={user.revenue}
                          className="form-control input-text-box"
                          onChange={(e) =>
                            handleUserChange(e, productIndex, userIndex, 'revenue')
                          }
                          required
                        />
                      </div>

                      <div>
                        <button
                          type="button"
                          className="btn btn-remove"
                          onClick={() => handleRemoveUser(productIndex, userIndex)}
                        >
                          Remove User
                        </button>
                      </div>
                    </div>
                  ))}
                  <div>
                    <button
                      type="button"
                      className="btn btn-add"
                      onClick={() => handleAddUser(productIndex)}
                    >
                      Add User
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">No products available</div>
            )}
            <div className="col-12 text-center">
            
              <button type="submit" className="btn btn-primary btn-submit">
                Update product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <ToastContainer />
  </div>
  );
};

export default Featuredproduct;
