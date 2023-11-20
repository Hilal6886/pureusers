// ProductService.js

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export const fetchProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'fatured products'));
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
