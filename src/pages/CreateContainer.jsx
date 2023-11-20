import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateContainer= () => {
  const [products, setProducts] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    const updatedImageFiles = [...imageFiles];
    updatedImageFiles[index] = file;
    setImageFiles(updatedImageFiles);
  };

  const handleAddProduct = () => {
    const newProduct = {
      title: '',
      description: '',
      companyuser: '', // Add the companyuser field here
      users: [], // New array for holding product users
    };
    setProducts([...products, newProduct]);
    setImageFiles([...imageFiles, null]);
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);

    const updatedImageFiles = [...imageFiles];
    updatedImageFiles.splice(index, 1);
    setImageFiles(updatedImageFiles);
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
      setIsSubmitting(true);

      const productDocs = [];

      for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const imageFile = imageFiles[i];

        if (!product.title || !product.description || !product.companyuser) {
          toast.error('All fields are mandatory to fill');
          setIsSubmitting(false);
          return;
        }

        let imageUrl = null;
        if (imageFile) {
          const storageRef = ref(storage, `featured product_images/${imageFile.name}`);
          const uploadTask = uploadBytesResumable(storageRef, imageFile);
          const snapshot = await uploadTask;

          imageUrl = await getDownloadURL(snapshot.ref);
        }

        const productDocRef = await addDoc(collection(db, 'fatured products'), {
          title: product.title,
          companyuser: product.companyuser,
          description: product.description,
          imageUrl: imageUrl,
          users: product.users,
        });

        productDocs.push(productDocRef);
      }

      toast.success('Products saved successfully');

      setProducts([]);
      setImageFiles([]);
    } catch (error) {
      toast.error('Error adding products');
      console.error('Error adding products: ', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container-fluid mb-4">
      <div className="containert">
        <div className="col-12">
          <div className="text-center heading py-2">Add Featured Products</div>
        </div>
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
            <form className="ghy row blog-form" onSubmit={handleSubmit}>
           

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
        type="text"
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

    <div>
      <label htmlFor={`image-${index}`}>Product Image:</label>
      <input
        type="file"
        id={`image-${index}`}
        name="image"
        className="form-control-file"
        onChange={(e) => handleImageChange(e, index)}
      />
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

export default CreateContainer;
