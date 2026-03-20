import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blogData";

function BlogDetails() {

  const { id } = useParams();

  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return <h2>Blog Not Found</h2>;
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogDetails;