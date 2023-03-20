import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";

export const getAllBookings = async () => {
  const bookings = [];
  try {
    const querySnapshot = await getDocs(collection(db, "bookings"));
    querySnapshot.forEach((doc) => {
      bookings.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.error("Error getting bookings: ", error);
  }
  return bookings;
};
