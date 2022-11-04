import { getDatabase,ref,child,push } from "firebase/database";

class Blog{
constructor(){
    this.db = getDatabase();
}
createBlog(blog) {
        // const app = initializeApp(firebaseConfig);
         // Get a key for a new Post.
         const newPostKey = push(child(ref(this.db), 'blogs')).key;
         const blogData={ ...blog, id:newPostKey}
        push(ref(this.db, "bogs"),blogData );
}
}

export default Blog