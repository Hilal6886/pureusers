// services/ProductService.js

import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const fetchProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'fatured products'));
    const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log('Fetched products:', products); // Add this line for debugging
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};






