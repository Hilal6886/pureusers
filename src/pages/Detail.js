// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   limit,
//   query,
//   serverTimestamp,
//   Timestamp,
//   updateDoc,
//   orderBy,
//   where,
// } from "firebase/firestore";
import { isEmpty } from "lodash";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import CommentBox from "../components/CommentBox";
import Like from "../components/Like";
import FeatureBlogs from "../components/FeatureBlogs";

import Tags from "../components/Tags";
import UserComments from "../components/UserComments";
import { db } from "../firebase";
import Spinner from "../components/Spinner";

import {
  collection,

  getDocs,
  limit,
  query,

  orderBy,

} from "firebase/firestore";
import { getBlog, updateBlog } from "../services/blog.service"

const Detail = ({ setActive, user }) => {

  const userId = user?.uid;
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState({});
  const [blogs, setBlogs] = useState([]);

  const [tags, setTags] = useState([]);
  const [comments, setComments] = useState([]);
  let [likes, setLikes] = useState([]);
  const [userComment, setUserComment] = useState("");
  // const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    const getRecentBlogs = async () => {
      const blogRef = collection(db, "blogs");
      const recentBlogs = query(
        blogRef,
        orderBy("timestamp", "desc"),
        limit(5)
      );
      const docSnapshot = await getDocs(recentBlogs);
      setBlogs(docSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    getRecentBlogs();
  }, []);

  const getBlogDetail = async () => {
    const blogDetail = await getBlog(id)
    blogDetail.timestamp = (blogDetail.timestamp).toDate().toDateString()
    setBlog(blogDetail || {});
    setLikes(blogDetail.likes || []);
    setComments(blogDetail.comments || []);
    // console.log("BBLOGGGGGGGGGGGGGGG",blogDetail)
    // const relatedBlogs = await getRelatedBlogs(blogDetail.tags)
    // setRelatedBlogs(relatedBlogs);
    setLoading(false);
  };

  useEffect(() => {
    id && getBlogDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  const handleComment = async (e) => {
    e.preventDefault();
    comments.push({
      createdAt: new Date(),
      userId,
      name: user?.displayName,
      body: userComment,
    });
    await updateBlog(id, { ...blog, comments })
    toast.success("Comment posted successfully");
    setUserComment("");
  };

  const handleLike = async () => {
    if (userId) {
      if (blog?.likes) {
        const index = likes.findIndex((id) => id === userId);
        if (index === -1) {
          likes.push(userId);
          setLikes([...new Set(likes)]);
        } else {
          likes = likes.filter((id) => id !== userId);
          setLikes(likes);
        }
        await updateBlog(id,
          {
            ...blog,
            likes
          }
        )
      }
    }
  };

  return (
    <div className="single">
      <div
        className="blog-title-box"
        
      >
          <img src={blog?.imgUrl} alt='jh' />
       
      </div>
      <div className="container-fluid pb-4 pt-4 padding blog-single-content">
        <div className="container padding">
          <div className="row mx-0">
            <div className="col-md-8 tert">
              <span className="meta-info text-start">
                By <p className="author">{blog?.author}</p> -&nbsp;
                {blog?.timestamp}
                <Like handleLike={handleLike} likes={likes} userId={userId} />
              </span>
              <p className="text-start">{blog?.description}</p>
              <div className="text-start">
                <Tags tags={blog?.tags} />
              </div>
              <br />
              <div className="custombox">
                <div className="scroll">
                  <h4 className="small-title">{comments?.length} Comment</h4>
                  {isEmpty(comments) ? (
                    <UserComments
                      msg={
                        "No Comment yet posted on this blog. Be the first to comment"
                      }
                    />
                  ) : (
                    <>
                      {comments?.map((comment) => (
                        <UserComments {...comment} />
                      ))}
                    </>
                  )}
                </div>
              </div>
              <CommentBox
                userId={userId}
                userComment={userComment}
                setUserComment={setUserComment}
                handleComment={handleComment}
              />
            </div>
            <div className="col-md-3">
              <div className="blog-heading text-start py-2 mb-4">Tags</div>
              <Tags tags={tags} />
              <FeatureBlogs title={"Recent Blogs"} blogs={blogs} />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

