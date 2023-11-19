import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, updateDoc, getDoc, addDoc, collection } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Category = () => {
  const { categoryId } = useParams();
  const [categoryName, setCategoryName] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const categoryDoc = await getDoc(doc(db, 'categories', categoryId));
        if (categoryDoc.exists()) {
          const categoryData = categoryDoc.data();
          setCategoryName(categoryData.name);
          const productIds = categoryData.products || [];
          const fetchedProducts = await fetchProducts(productIds);
          setProducts(fetchedProducts);
        } else {
          toast.error('Category not found');
        }
      } catch (error) {
        console.error('Error fetching category: ', error);
        toast.error('Error fetching category');
      }
    };

    fetchCategory();
  }, [categoryId]);

  const fetchProducts = async (productIds) => {
    const fetchedProducts = [];
    for (const productId of productIds) {
      try {
        const productDoc = await getDoc(doc(db, 'products', productId));
        if (productDoc.exists()) {
          fetchedProducts.push({ id: productId, ...productDoc.data() });
        } else {
          console.error(`Product with ID ${productId} not found`);
        }
      } catch (error) {
        console.error(`Error fetching product with ID ${productId}: `, error);
      }
    }
    return fetchedProducts;
  };

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
  };

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

  const handleAddProduct = () => {
    const newProduct = {
      title: '',
      companyuser: "",
      description: '',
      imageFile: null, // Add imageFile property to store the file object
      users: [],
    };
    setProducts([...products, newProduct]);
  };

  

  // ... Existing code ...



const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const productDocs = [];

    //  Update category name
    await updateDoc(doc(db, 'categories', categoryId), {
      name: categoryName,
    });

    //  Update products and product users
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const imageFile = product.imageFile; // Get the imageFile from the product

      if (!product.title || !product.description || !product.companyuser) {
        toast.error('All fields are mandatory to fill');
        return;
      }
      const productDocRef = await addDoc(collection(db, 'products'), {
        title: product.title,
        companyuser: product.companyuser,
        description: product.description,
        category: categoryId,
        users: product.users, // Add the product users within the product document
      });
      productDocs.push(productDocRef);
    }

    //  Update the category with the list of product ids
    await updateDoc(doc(db, 'categories', categoryId), {
      products: productDocs.map((doc) => doc.id),
    });

    toast.success('Category and products saved successfully');

    setCategoryName('');
    setProducts([]);
  } catch (error) {
    toast.error('Error adding document');
    console.error('Error adding document: ', error);
  }
};

// ... Existing code ...


  return (
    <div className="container-fluid mb-4">
      <div className="container">
        <div className="col-12">
          <div className="text-center heading py-2">Edit Category</div>
        </div>
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
            <form className="row ghy" onSubmit={handleSubmit}>
              <div className="col-12 py-3">
                <input
                  type="text"
                  className="form-control input-text-box"
                  placeholder="Category"
                  value={categoryName}
                  onChange={handleCategoryNameChange}
                  required
                />
              </div>
              {products.length > 0 ? (
                products.map((product, productIndex) => (
                  <div key={product.id || productIndex} className="product-container">
                    <div>
                      <label htmlFor={`title-${productIndex}`}>Product Name:</label>
                      <input
                        type="text"
                        id={`title-${productIndex}`}
                        name="title"
                        className="form-control input-text-box"
                        value={product.title}
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
                      value={product.companyuser}
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
                        value={product.description}
                        onChange={(e) => handleProductChange(e, productIndex)}
                        required
                      ></textarea>
                    </div>
                    

                    {/* Product Users */}
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
                <button type="button" className="btn btn-add" onClick={handleAddProduct}>
                  Add Product
                </button>
                <button type="submit" className="btn btn-primary btn-submit">
                  Update Category
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

export default Category;
