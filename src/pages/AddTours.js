import React, { useState } from 'react';
import { collection, addDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddEditBlog = () => {
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleProductChange = (e, index) => {
    const { name, value } = e.target;
    const updatedProducts = [...products];
    updatedProducts[index][name] = value;
    setProducts(updatedProducts);
  };

  const handleUserChange = (e, productIndex, userIndex, field) => {
    const { value } = e.target;
    const updatedProducts = [...products];
    updatedProducts[productIndex].users[userIndex][field] = value;
    setProducts(updatedProducts);
  };

  const handleAddProduct = () => {
    const newProduct = {
      title: '',
      description: '',
      companyuser: '',
      users: [],
    };
    setProducts([...products, newProduct]);
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
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

  const handleRemoveUser = (productIndex, userIndex) => {
    const updatedProducts = [...products];
    updatedProducts[productIndex].users.splice(userIndex, 1);
    setProducts(updatedProducts);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const productDocs = [];
      setIsSubmitting(true);

      const categoryDocRef = await addDoc(collection(db, 'categories'), {
        name: category,
      });

      for (let i = 0; i < products.length; i++) {
        const product = products[i];

        if (!product.title || !product.description || !product.companyuser) {
          toast.error('All fields are mandatory to fill');
          setIsSubmitting(false);
          return;
        }

        const productDocRef = await addDoc(collection(db, 'products'), {
          title: product.title,
          companyuser: product.companyuser,
          description: product.description,
          category: categoryDocRef.id,
          users: product.users,
        });

        productDocs.push(productDocRef);
      }

      await updateDoc(categoryDocRef, {
        products: productDocs.map((doc) => doc.id),
      });

      toast.success('Category and products saved successfully');

      setCategory('');
      setProducts([]);
    } catch (error) {
      toast.error('Error adding document');
      console.error('Error adding document: ', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container-fluid mb-4">
      <div className="containert">
        <div className="col-12">
          <div className="text-center heading py-2">Add New Category</div>
        </div>
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
            <form className="ghy row blog-form" onSubmit={handleSubmit}>
              <div className="col-12 py-3">
                <input
                  type="text"
                  className="form-control input-text-box"
                  placeholder="Enter Category Name"
                  value={category}
                  onChange={handleCategoryChange}
                  required
                />
              </div>
              {products.map((product, index) => (
                <div key={index} className="product-container">
                  <div>
                    <label htmlFor={`title-${index}`}>Product Name:</label>
                    <input
                      type="text"
                      id={`title-${index}`}
                      name="title"
                      className="form-control input-text-box"
                      value={product.title}
                      onChange={(e) => handleProductChange(e, index)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor={`companyuser-${index}`}>Companies using this product:</label>
                    <input
                      type="number"
                      id={`companyuser-${index}`}
                      name="companyuser"
                      className="form-control input-text-box"
                      value={product.companyuser}
                      onChange={(e) => handleProductChange(e, index)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor={`description-${index}`}> Product Description:</label>
                    <textarea
                      id={`description-${index}`}
                      name="description"
                      className="form-control description-box"
                      value={product.description}
                      onChange={(e) => handleProductChange(e, index)}
                      required
                    ></textarea>
                  </div>

                  <h3>Product Users</h3>
                  {product.users.map((user, userIndex) => (
                    <div key={userIndex}>
                      <div>
                        <label>Company Name:</label>
                        <input
                          type="text"
                          value={user.companyName}
                          className="form-control input-text-box"
                          onChange={(e) =>
                            handleUserChange(
                              e,
                              index,
                              userIndex,
                              'companyName'
                            )
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
                            handleUserChange(
                              e,
                              index,
                              userIndex,
                              'companyWebsite'
                            )
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
                            handleUserChange(e, index, userIndex, 'country')
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
                            handleUserChange(e, index, userIndex, 'revenue')
                          }
                          required
                        />
                      </div>

                      <div>
                        <button
                          type="button"
                          className="btn btn-remove"
                          onClick={() => handleRemoveUser(index, userIndex)}
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
                      onClick={() => handleAddUser(index)}
                    >
                      Add User
                    </button>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="btn btn-remove"
                      onClick={() => handleRemoveProduct(index)}
                    >
                      Remove Product
                    </button>
                  </div>
                </div>
              ))}
              <div className="col-12 py-3">
                <button
                  type="button"
                  className="btn btn-add"
                  onClick={handleAddProduct}
                >
                  Add Product
                </button>
              </div>
              <div className="col-12 py-3">
                <button
                  type="submit"
                  className="btn btn-add"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
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

export default AddEditBlog;
