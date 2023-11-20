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

// services/ProductService.js

// ...

// services/ProductService.js

// ...
// services/ProductService.js

export const getFeaturedProducts = async (id) => {
  try {
    const docRef = doc(db, 'fatured products', id); // Ensure correct collection name
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const featuredProductIds = docSnap.data().ProductIds || [];
      const featuredProducts = [];

      // Fetch featured products using the IDs
      for (const productId of featuredProductIds) {
        const productDoc = await getDoc(doc(db, 'fatured products', id)); // Ensure correct collection name
        if (productDoc.exists()) {
          featuredProducts.push({ id: productDoc.id, ...productDoc.data() });
        }
      }

      console.log('Fetched featured products:', featuredProducts); // Add this line for debugging
      return featuredProducts;
    } else {
      console.error('Featured products document does not exist');
      return [];
    }
  } catch (error) {
    console.error('Error fetching featured products:', error);
    throw error;
  }
};



