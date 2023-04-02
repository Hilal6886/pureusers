// import { getStorage, ref, deleteObject } from "firebase/storage";

// const storage = getStorage();


const getImageUrl=(name)=>{
    return `https://firebasestorage.googleapis.com/v0/b/quantumtourandtravels.appspot.com/o/quantumtourandtravel%2FAssets%2F${name}?alt=media`
} 
const deleteImage=(name)=>{
// // Create a reference to the file to delete
// const desertRef = ref(storage, name);

// deleteObject(desertRef).then(() => {
// }).catch((error) => {
// });
} 
module.exports = { getImageUrl, deleteImage };