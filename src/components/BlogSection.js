import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { excerpt } from "../utility";


import useAdmin from "../utils/hooks";


const BlogSection = ({ id, title, description, category, imgUrl, userId, author, timestamp, handleDelete }) => {
  const isAdmin = useAdmin();
  console.log("Admin", isAdmin);

  return (
    <div>
      <div className="row pb-4" key={id}>
        <div className="col-md-5">
          <div className="hover-blogs-img">
            <div className="blogs-img">
              <img src={imgUrl} alt={title} />
              <div></div>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="text-start">
            <h6 className="category catg-color">{category}</h6>
            <span className="title py-2">{title}</span>
            <span className="meta-info">
              <p className="author">{author}</p> -&nbsp;
              {timestamp.toDate().toDateString()}
            </span>
          </div>
          <div className="short-description text-start">
            {excerpt(description, 120)}
          </div>
          <Link to={`/detail/${id}`}>
            <button className="btn btn-read">Read More</button>
          </Link>
          {isAdmin && (

            <div style={{ float: "right" }}>
            <i class="ri-delete-bin-line"
            style={{ margin: "15px", cursor: "pointer",color:"red" }}
            size="2x"
            onClick={() => handleDelete(id)}
            >
            </i>
              <Link to={`/update/${id}`}>
              <i class="ri-edit-box-line"
                  style={{ cursor: "pointer" }}
                  size="2x"
                ></i>
              </Link>
            </div>

          )}


        </div>




      </div>
    </div>
  );
};

export default BlogSection;
