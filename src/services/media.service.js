const getImageUrl=(name)=>{
    return `https://firebasestorage.googleapis.com/v0/b/quantumtourandtravels.appspot.com/o/quantumtourandtravel%2FAssets%2F${name}?alt=media`
} 

module.exports = { getImageUrl };