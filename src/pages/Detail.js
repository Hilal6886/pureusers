import { isEmpty } from "lodash";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import CommentBox from "../components/CommentBox";

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
import { getBlog, updateBlog } from "../services/blog.service";
import "./Detail.css";

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

  useEffect(() => {
    const getRecentBlogs = async () => {
      const blogRef = collection(db, "blogs");
      const recentBlogs = query(blogRef, orderBy("timestamp", "desc"), limit(5));
      const docSnapshot = await getDocs(recentBlogs);
      setBlogs(docSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    getRecentBlogs();
  }, []);

  const getBlogDetail = async () => {
    const blogDetail = await getBlog(id);
    blogDetail.timestamp = blogDetail.timestamp.toDate().toDateString();
    setBlog(blogDetail || {});
    setLikes(blogDetail.likes || []);
    setComments(blogDetail.comments || []);
    setLoading(false);
  };

  useEffect(() => {
    id && getBlogDetail();
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
    await updateBlog(id, { ...blog, comments });
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
        await updateBlog(id, { ...blog, likes });
      }
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 gap-4">
        <div className="col-span-8">
          <div className="mb-8">
            <img src={blog?.imgUrl} alt="Blog" className="w-full h-auto rounded" />
          </div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">{blog?.title}</h2>
            <div className="flex items-center mb-4">
              <p className="text-sm text-gray-500 mr-2">By {blog?.author} - {blog?.timestamp}</p>
              
            </div>
            <p className="text-gray-800 text-justify">{blog?.description}</p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Comments ({comments.length})</h3>
            {isEmpty(comments) ? (
              <UserComments msg="No comments yet. Be the first to comment." />
            ) : (
              <>
                {comments.map((comment, index) => (
                  <UserComments key={index} {...comment} />
                ))}
              </>
            )}
          </div>
          <CommentBox
            userId={userId}
            userComment={userComment}
            setUserComment={setUserComment}
            handleComment={handleComment}
          />
        </div>
      
      </div>
    </div>
  );
};

export default Detail;
