import {
    collection,
    doc,
    getDoc,
    getDocs,
    limit,
    query,
    serverTimestamp,
    updateDoc,
    orderBy,
    where,
  } from "firebase/firestore";
  import { db } from "../firebase";

const getBlog= async (blogId)=>{
    try{
        const docRef = doc(db, "blogs", blogId);
       return await getDoc(docRef);
    }catch(err){
        console.log("BLOG SERVICE: ",err)
        return null
    }
}
const getRecentBlogs= async (blogId)=>{
    try{
        const blogRef = collection(db, "blogs");
        const recentBlogs = query(
          blogRef,
          orderBy("timestamp", "desc"),
          limit(5)
          );
          const docSnapshot = await getDocs(recentBlogs);
          return docSnapshot.docs
    }catch(err){
        console.log("BLOG SERVICE: ",err)
        return []
    }
}

const getBlogs= async ()=>{
    try{
        const docRef = doc(db, "blogs");
        await getDoc(docRef);
    }catch(err){
        console.log("BLOG SERVICE: ",err)
        return null
    }
}
const getRelatedBlogs= async (tags)=>{
    try{
    const blogRef = collection(db, "blogs");
    const relatedBlogsQuery = query(
      blogRef,
      where("tags", "array-contains-any", tags, limit(3))
    );
    const relatedBlogSnapshot = await getDocs(relatedBlogsQuery);
    const relatedBlogs = [];
    relatedBlogSnapshot.forEach((doc) => {
      relatedBlogs.push({ id: doc.id, ...doc.data() });
    });
        const docRef = doc(db, "blogs");
        await getDoc(docRef);
    }catch(err){
        console.log("BLOG SERVICE: ",err)
        return null
    }
}

const updateBlog= async (blogId,blogData)=>{
    try{
        await updateDoc(doc(db, "blogs", blogId), {...blogData, timestamp: serverTimestamp()});
    }catch(err){
        console.log("BLOG SERVICE: ",err)
        return null
    }
}

module.exports= {
    getBlog,
    getRecentBlogs,
    getBlogs,
    getRelatedBlogs,
    updateBlog
}