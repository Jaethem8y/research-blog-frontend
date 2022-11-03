import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Post } from "../types/post";
import { url } from "../config";
import "../styles/posts.scss";
import { useParams } from "react-router-dom";

export default function Posts() {
  const { category } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await axios.get(url + "posts/" + category);
        setPosts(res.data);
        setLoading(false);
      } catch (e) {
        setError(true);
        console.log(e);
      }
    };
    fetchBlogPost();
  }, []);
  if (loading) {
    return (
      <div className="view-post-wrapper">
        <div className="view-post-content">
          <p>Loading ... </p>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="view-post-wrapper">
        <div className="view-post-content">
          <p>There has been an error ...</p>
        </div>
      </div>
    );
  }
  if (posts === null) {
    return (
      <div className="view-post-wrapper">
        <div className="view-post-content">
          <p>There is no contents yet ...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="view-post-wrapper">
      <div className="view-post-outer">
        <h3>List of Contents</h3>
        <div className="view-post-post">
          {posts.map((post) => {
            return (
              <Link key={post.title} to={"/post/" + post.title}>
                <div className="view-project-inside">
                  <hr />
                  <h3>{post.title}</h3>
                  <p>
                    <b>Description : </b> {post.description}
                  </p>
                  <hr />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
