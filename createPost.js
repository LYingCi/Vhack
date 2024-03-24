import React from "react";
import './createPost.css';

const createPost = () => {
  return (
    <div className="post-wrap">
      <div className="post-top">
        <h1>Create Post</h1>
      </div>
      <div className="post-bottom">
        <div className="createpost">
          <div className="upload">
            <h2>Upload picture(optional)</h2>
          </div>
          <div className="UploadBox1"></div>
          <button class="uploadbutton">upload</button>
          <div className="upload">
            <h2>Create a title (required)</h2>
          </div>
          <div className="UploadBox2"></div>
          <div className="Create">
            <button class="Createbutton">Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default createPost;