import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/blogs">Blogs</Link>
      </nav>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/blogs" element={<Blogs />} />

        <Route path="/blog/:id" element={<BlogDetails />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;