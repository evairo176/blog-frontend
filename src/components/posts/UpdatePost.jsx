import React from "react";
import Navbar from "../cummon/Navbar";

function UpdatePost() {
  return (
    <>
      <Navbar />
      <div className="container-content-blog">
        <div className="card-form">
          <form action="">
            <div className="form-group mb-3">
              <label htmlFor="title">Title</label>
              <input className="form-custom" placeholder="Post" type="text" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="title">Title</label>
              <input className="form-custom" placeholder="Post" type="text" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="title">Title</label>
              <input className="form-custom" placeholder="Post" type="text" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdatePost;
