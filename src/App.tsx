import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/home/Header";
import Footer from "./components/home/Footer";
import Home from "./pages/Home";
import Post from "../src/pages/Post";
import Posts from "../src/pages/Posts";
import Login from "../src/pages/Login";
import Add from "./pages/Add";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/admin/login" element={<Login />} />

          <Route path="/admin/add" element={<Add />} />

          <Route path="/:category" element={<Posts />} />
          <Route path="/:category/:title" element={<Post />} />

          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
