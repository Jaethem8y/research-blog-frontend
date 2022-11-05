import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Post as _Post } from "../types/post";
import { url } from "../config";
import "../styles/post.scss";

export default function Post() {
  const { title } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState<_Post>();

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        setLoading(true);
        setError(false);
        console.log(url + "post/" + title);
        // const res = await axios.get(url + "post/" + title);
        const res = await axios.get(url + "post/" + title, {
          headers: {
            accessControlAllowOrigin: "*",
          },
        });
        setPost(res.data);
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
      <div className="view-project-wrapper">
        <div className="view-project-content">
          <p>Loading ... </p>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="view-project-wrapper">
        <div className="view-project-content">
          <p>There has been an error ...</p>
        </div>
      </div>
    );
  }
  if (post === null || post === undefined) {
    return (
      <div className="view-project-wrapper">
        <div className="view-project-content">
          <p>There is no contents yet ...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="view-content-wrapper">
      <div className="view-content-content">
        <h3>Post Name : {post.title}</h3>
        <div className="view-content-post">
          <p>Description: {post.description}</p>
        </div>
        <>
          {post.contents.map((content, i) => {
            return (
              <div className="view-content-inside" key={i}>
                {content.header !== "" && content.header !== null && (
                  <h4>{content.header}</h4>
                )}
                {content.writing !== "" && content.writing !== null && (
                  <p>{content.writing}</p>
                )}
                {content.tag !== "" && content.tag !== null && (
                  <p>{content.tag}</p>
                )}{" "}
                {content.link !== null && content.link !== "" && (
                  <a href={content.link}>{content.link}</a>
                )}
                {content.image !== "" && content.image !== null && (
                  <div className="view-content-inside">
                    {content.image !== "" && <img src={content.image} alt="" />}
                  </div>
                )}
                {content.important !== "" && content.important !== null && (
                  <div className="view-content-important">
                    {content.important}
                  </div>
                )}
              </div>
            );
          })}
        </>
      </div>
    </div>
  );
}
