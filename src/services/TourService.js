import { db } from '../firebase';
import { collection, getDocs, getDoc, doc, updateDoc } from 'firebase/firestore';

export const getCategories = async () => {
  const categories = [];
  const querySnapshot = await getDocs(collection(db, 'categories'));
  querySnapshot.forEach((doc) => {
    categories.push({ id: doc.id, ...doc.data() });
  });
  return categories;
};

export const getCategoryProducts = async (categoryId) => {
  const categoryDoc = await getDoc(doc(db, 'categories', categoryId));
  if (!categoryDoc.exists()) {
    console.error('Category not found');
    return;
  }
  const categoryData = categoryDoc.data();
  const productIds = categoryData.products;
  const products = [];
  for (const productId of productIds) {
    const productDoc = await getDoc(doc(db, 'products', productId));
    products.push({ id: productDoc.id, ...productDoc.data() });
  }
  return products;
};

export const getProductsByCategory = async (categoryId) => {
  return await getCategoryProducts(categoryId);
};

export const getProduct = async (productId) => {
  const productDoc = await getDoc(doc(db, 'products', productId));
  if (!productDoc.exists()) {
    console.error('Product not found');
    return;
  }
  const productData = productDoc.data();
  return { id: productDoc.id, ...productData };
};

export const getRelatedProducts = async (productId, limit) => {
  const productDoc = await getDoc(doc(db, 'products', productId));
  if (!productDoc.exists()) {
    console.error('Product not found');
    return;
  }
  const productData = productDoc.data();
  const categoryProducts = await getCategoryProducts(productData.category);
  const relatedProducts = categoryProducts.filter(
    (product) => product.id !== productId
  );
  return relatedProducts.slice(0, limit);
};

export const updateCategory = async (categoryId, updatedData) => {
  const categoryDocRef = doc(db, 'categories', categoryId);
  await updateDoc(categoryDocRef, updatedData);
};

export const updateProduct = async (productId, updatedData) => {
  const productDocRef = doc(db, 'products', productId);
  await updateDoc(productDocRef, updatedData);
};
