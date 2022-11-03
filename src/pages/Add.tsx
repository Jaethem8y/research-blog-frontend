import React, { useEffect, useState } from "react";
import "../styles/add.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Post, Content } from "../types/dto";
import { url } from "../config";
import "../styles/post.scss";
import { ChangeEvent } from "../types/changeEvent";

export default function Add() {
  let { _category, _title } = useParams();
  const [amount, setAmount] = useState(0);

  let category = "";
  let title = "";

  if (_category !== undefined && _title !== undefined) {
    category = _category;
    title = _title;
  }

  const [post, setPost] = useState<Post>({
    title: "",
    description: "",
    category: category,
    contents: [],
  });

  const onPostChange = (e: ChangeEvent, t: string) => {
    setPost({
      ...post,
      [t]: e.target.value,
    });
  };
  const onContentChange = (e: ChangeEvent, i: number, t: string) => {
    setPost({
      ...post,
      contents: [
        ...post.contents.slice(0, i),
        { ...post.contents[i], [t]: e.target.value },
        ...post.contents.slice(i + 1),
      ],
    });
  };

  const addMoreContent = () => {
    setAmount((amount) => amount + 1);
    setPost({
      ...post,
      contents: [
        ...post.contents,
        {
          order: amount,
          header: null,
          writing: null,
          tag: null,
          link: null,
          image: null,
          code: null,
          important: null,
        },
      ],
    });
    console.log(post);
  };
  async function sendPost() {
    console.log("auth : ", localStorage.getItem("apiKey"));
    console.log(url + "post/add");
    console.log(localStorage.getItem("apiKey"));
    const res = await axios.post(url + "post/add", post, {
      headers: {
        Authorization: localStorage.getItem("apiKey"),
      },
    });
    console.log(res.data);
  }
  async function addPost() {
    await sendPost();
  }

  return (
    <div className="post-wrapper">
      <div className="post-content">
        <h3>Add a Project Post</h3>
        <div className="add-project-post">
          <table>
            <tbody>
              <tr>
                <td>title : </td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => onPostChange(e, "title")}
                  />
                </td>
              </tr>
              <tr>
                <td>category : </td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => onPostChange(e, "category")}
                  />
                </td>
              </tr>
              <tr>
                <td>description : </td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => onPostChange(e, "description")}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <>
            {post.contents.map((el, i) => {
              return (
                <div>
                  <h5>Add More Content</h5>
                  <table>
                    <tbody>
                      <tr>
                        <td>Header: </td>
                        <td>
                          <input
                            type="text"
                            onChange={(e) => onContentChange(e, i, "header")}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>writing : </td>
                        <td>
                          <textarea
                            onChange={(e) => onContentChange(e, i, "writing")}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Code : </td>
                        <td>
                          <textarea
                            onChange={(e) => onContentChange(e, i, "code")}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>tag : </td>
                        <td>
                          <input
                            onChange={(e) => onContentChange(e, i, "tag")}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>link : </td>
                        <td>
                          <input
                            onChange={(e) => onContentChange(e, i, "link")}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Image : </td>
                        <td>
                          <input
                            onChange={(e) => onContentChange(e, i, "image")}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Code : </td>
                        <td>
                          <textarea
                            onChange={(e) => onContentChange(e, i, "code")}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Important : </td>
                        <td>
                          <textarea
                            onChange={(e) => onContentChange(e, i, "important")}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })}
          </>
          <button onClick={() => addMoreContent()}>Add More Content</button>
        </div>
        <button onClick={() => addPost()}>Add Post</button>
      </div>
    </div>
  );
}
