import React from "react";
import { Link } from "react-router-dom";
import blogs from "../data/blogData";

function Blogs() {
  return (
    <div>
      <h2>Blogs</h2>

      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>

          <Link to={`/blog/${blog.id}`}>
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Blogs;