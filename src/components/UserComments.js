// UserComments.js

import React from "react";
import userAvatar from '../assets/images/avatar.png';
import './UserComments.css'; // Import the external CSS file

const UserComments = ({ name, body, createdAt, msg }) => {
  const commentDate = createdAt instanceof Date ? createdAt : (createdAt ? createdAt.toDate() : null);
  const formattedDate = commentDate ? commentDate.toDateString() : "";

  return (
    <div className={`user-comments-container ${msg ? 'user-comments-msg' : ''}`}>
      {msg ? (
        <h4 className="text-lg font-semibold text-gray-600">{msg}</h4>
      ) : (
        <>
          <div className="user-avatar">
            <img
              src={userAvatar}
              alt="user profile"
              className="rounded-full h-12 w-12"
            />
          </div>
          <div className="user-details ml-3">
            <h3 className="user-name">
              {name}
              <small className="date">{formattedDate}</small>
            </h3>
            <p className="comment-body">{body}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default UserComments;
