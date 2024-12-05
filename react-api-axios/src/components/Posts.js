import React, { useState, useEffect } from "react";
import { apiService } from "../services/postService";
import PostForm from "./PostForm";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(null);

  const axiosInstance = new apiService();

  async function getPostData() {
    try {
      const postResponse = await axiosInstance.getPosts();
      setPosts(postResponse.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPostData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axiosInstance.deletePost(id);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const startEditing = (post) => {
    setEditPost(post);
  };

  return (
    <div>
      <h1>Posts</h1>
      <PostForm
        posts={posts}
        setPosts={setPosts}
        editPost={editPost}
        setEditPost={setEditPost}
      ></PostForm>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button type="button" onClick={() => startEditing(post)}>
              Edit
            </button>
            <button type="button" onClick={() => handleDelete(post.id)}>
              Delete post
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
