import { collection, getDocs,getDoc,doc } from 'firebase/firestore';
import { db } from '../firebase';

export const fetchProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'fatured products'));
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    console.log('Fetched products:', products); // Add this line for debugging
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getRelatedProducts = async (featuredProductId) => {
  try {
    // Replace 'relatedProducts' with the actual collection name for related products
    const docRef = doc(db, 'relatedProducts', featuredProductId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const relatedProductIds = docSnap.data().relatedProductIds || [];
      const relatedProducts = [];

      // Fetch related products using the IDs
      for (const productId of relatedProductIds) {
        const productDoc = await getDoc(doc(db, 'fatured products', productId));
        if (productDoc.exists()) {
          relatedProducts.push({ id: productDoc.id, ...productDoc.data() });
        }
      }

      console.log('Fetched related products:', relatedProducts); // Add this line for debugging
      return relatedProducts;
    } else {
      console.error('Related products document does not exist');
      return [];
    }
  } catch (error) {
    console.error('Error fetching related products:', error);
    throw error;
  }
};
